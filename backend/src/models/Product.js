
module.exports = app => {
    return app.db.schema.withSchema('my_db').hasTable('tb_product').then(function(exists) {
        if (!exists) {
          return app.db.schema.createTable('tb_product', function(t) {
            t.increments('id').primary()
            t.string('title', 100)
            t.string('description', 100)
            t.string('url', 256)
            t.timestamp('createdAt').defaultTo(app.db.fn.now())
          })
        }
    })
}