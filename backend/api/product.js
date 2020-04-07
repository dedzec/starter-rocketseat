module.exports = app => {
    const save = (req, res) => {
        const product = { ...req.body }
        if(req.params.id) product.id = req.params.id

        if (product.id) {
            app.db('tb_product')
                .update(product)
                .where({ id: product.id })
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        } else {
            app.db('tb_product')
                .insert(product)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }
    }

    const remove = async (req, res) => {
        try {
            const product = await app.db('tb_product')
                .where({ id: req.params.id }).del()
            console.log(product)
            if (!product) {
                return res.status(400).send('Produto não encontrado')
            }
            
            res.status(204).send()
        } catch(msg) {
            res.status(500).send(msg)
        }
    }

    const limit = 6
    const get = async (req, res) => {
        const page = req.query.page || 1

        const result = await app.db('tb_product').count('id').first()
        console.log(result)
        const count = result.count
        console.log(count)

        app.db('tb_product')
            .limit(limit).offset(page * limit - limit)
            .then(products => res.json({ docs: products, count, limit, page }))
            .catch(err => res.status(500).send(err))
    }

    const getById = (req, res) => {
        app.db('tb_product')
            .where({ id: req.params.id })
            .first()
            .then(product => res.json(product))
            .catch(err => res.status(500).send(err))
    }

    return { save, remove, get, getById }
}