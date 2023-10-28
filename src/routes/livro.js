const express = require('express');
const conectarBancoDados = require('../middlewares/conectarBD');
const tratarErrosEsperados = require('../functions/tratarErrosEsperados');
const EsquemaLivro = require('../models/livro');
const router = express.Router();

/* GET users listing. */
router.post('/criar', conectarBancoDados , async function(req, res,) {
  try{
    // #swagger.tags = ['Livros']
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

  router.put('/editar/:id', conectarBancoDados , async function(req, res,) {
    try{
      // #swagger.tags = ['Livros']
      let idLivros = req.params.id
      let {id, titulo, qtdPaginas, codigoISBN, editora} = req.body;
      
      const checkLivro = await EsquemaLivro.findOne ({ _id: idLivros});
      if (!checkLivro){
        throw new Error("Tarefa não encontrada")
      }

    const LivroAtualizado = await EsquemaLivro.updateOne({ _id: idLivros}, {id, titulo, qtdPaginas, codigoISBN, editora} )
    if (LivroAtualizado?.modifiedCount > 0){
        const dadosLivro = await EsquemaLivro.findOne({_id: idLivros});
            
        res.status(200).json({
            status: "OK",
            statusMensagem: "Livro atualizado com sucesso !!!.",
            resposta: dadosLivro
      })
    }
    } catch (error) {
      return tratarErrosEsperados(res, error);
      }
      
  
    });

    router.get('/obter', conectarBancoDados , async function(req, res,) {
        try{
          // #swagger.tags = ['Livros']
          // #swagger.description = "Endpoint para obter todas os livros"
          const respostaBD =  await EsquemaLivro.find();
      
          res.status(200).json({
            status: "OK",
            statusMensagem: "Livro listadas com sucesso !!!.",
            resposta: respostaBD
          })
        } catch (error) {
          return tratarErrosEsperados(res, error);
          }
          
      
        });

        router.delete('/deletar/:id', conectarBancoDados , async function(req, res,) {
            try{
            // #swagger.tags = ['Livros']
            let idLivros = req.params.id

            const checkLivro = await EsquemaLivro.findOne ({ _id: idLivros});
            if (!checkLivro){
            throw new Error("Tarefa não encontrada")
      }
              const respostaBD =  await EsquemaLivro.deleteOne();
          
              res.status(200).json({
                status: "OK",
                statusMensagem: "Livro deletado com sucesso !!!.",
                resposta: respostaBD
              })
            } catch (error) {
              return tratarErrosEsperados(res, error);
              }
              
          
            });

module.exports = router;