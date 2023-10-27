const express = require('express');
const conectarBancoDados = require('../middlewares/conectarBD');
const tratarErrosEsperados = require('../functions/tratarErrosEsperados');
const EsquemaLivro = require('../models/livro');
const router = express.Router();

/* GET users listing. */
router.post('/criar', conectarBancoDados , async function(req, res,) {
  try{
    // #swagger.tags = ['Tarefa']
    let {id, titulo, qtdPaginas, codigoISBN, editora} = req.body;
    const respostaBD =  await EsquemaLivro.create({id, titulo, qtdPaginas, codigoISBN, editora});

    res.status(200).json({
      status: "OK",
      statusMensagem: "Livro adicionado com sucesso !!!.",
      resposta: respostaBD
    })
  } catch (error) {
    return tratarErrosEsperados(res, error);
    }
    

  });

module.exports = router;