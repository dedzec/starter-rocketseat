module.exports = app => {
    app.route('/products')
        .post(app.api.product.save)
        .get(app.api.product.get)
    
    app.route('/products/:id')
        .post(app.api.product.save)
        .get(app.api.product.getById)
        .delete(app.api.product.remove)
}