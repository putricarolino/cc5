const express = require ('express')
const app = express()
const port = 3000
const {authPage, authGame} = require ('./middleware')

app.use(express.json())


app.get("/home", (req,res) => {
    res.json("HOME")

})

app.get('/game/level', authPage (["player","admin"]), (req,res) => {
    res.json({
        carolina : 5,
        danielle : 3,
        hadi : 4
    })
})

app.get('/game/:score', authGame,(req,res) => {
    const gameScore = req.params.score
    res.json(`your are passed ${gameScore}`)
})

app.listen(port, () => console.info(`app listening on port ${port}`))