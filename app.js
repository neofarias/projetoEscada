// Imports
const express = require('express')
const app = express()
const port = 3000

//Pasta principal do projeto
app.use(express.static('src'));

//Diretório arquivos HTML
app.set('views', './views');
app.set('view engine', 'ejs');

//Página inicial
app.get('', (req, res) => {
    res.render('index', { text: 'Hey' })
})

// Listen on Port 3000
app.listen(port, () => console.info(`App listening on port ${port}`))
