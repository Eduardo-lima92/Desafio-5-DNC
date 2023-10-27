const mongoose = require('mongoose');

const esquema = new mongoose.Schema(
    {
        
        id: {
            type: Number,
            required: 'é obrigatorio',
        },
        titulo: {
            type: String,
            required: 'é obrigatorio',
        },
        qtdPaginas: {
            type: Number,
            required: 'é obrigatorio',
        },

        codigoISBN: {
            type: Number,
            default: '',
        },
        
        editora: {
            type: String,
            required: 'é obrigatorio',
        },

    },
    {
        timestamps: true
    }
);

const EsquemaLivro = mongoose.models.Livro || mongoose.model('Livro', esquema);
module.exports = EsquemaLivro;