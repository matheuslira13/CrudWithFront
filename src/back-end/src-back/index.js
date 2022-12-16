const app = require('./app')
const Loaders = require('./loaders')

Loaders.start()

app.listen(3333,()=>console.log('Sucesso monstro, o serve ta de pé'))