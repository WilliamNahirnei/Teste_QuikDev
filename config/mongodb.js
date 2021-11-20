const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost/TesteQuikDev",{useNewURLParser: true})
.catch(e => {
    const mensagem = '!!!!!-ERRO-!!!!!. Não foi possivel estabelecer uma conexão com o mongodb'
    console.log(mensagem)
})