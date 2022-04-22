//Imports
const express = require ('express')
const app = express()
const port = 5000
const path = require('path')



//Static Files

app.use(express.static('public'))
app.use('/game-css',express.static(__dirname + 'public/game-css'))
app.use('/game-js',express.static(__dirname + 'public/game-js'))
app.use('/game-img',express.static(__dirname + 'public/game-img'))
app.use('/index-css',express.static(__dirname + 'public/index-css'))
app.use('/index-js',express.static(__dirname + 'public/index-js'))
app.use('/index-img',express.static(__dirname + 'public/index-img'))

// Set View's
app.set('views', './views')
app.set('view engine','ejs')

//Navigation
app.get('',(req, res) => {
    res.send('WELCOME')
})

app.get('/home', (req,res) => {
    res.sendFile(__dirname + '/views/index.html')
})

app.get('/game', (req,res) => {
    res.sendFile(__dirname + '/views/game.html')
})



//Listen on port 5000
app.listen(port, () => console.info(`app listening on port ${port}`))