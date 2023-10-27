function routes (app) {
    app.use('/users', require('./routes/users'));
    app.use('/livro', require('./routes/livro'));
    return;
}

module.exports = routes;