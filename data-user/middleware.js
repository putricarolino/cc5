const authPage = (permission) => {
    return (req,res,next) => {
        const userRole = req.body.role
        if (permission.includes(userRole)){
            next()
        } else {
            return res.status(401).json("no access")
        }
    }
}


const authGame = (req, res, next) => {
    const gameScore = parseInt(req.params.score)
    if(req.body.score.includes(gameScore)) {
        next()
    } else{
        return res.status(401).json("no access")
    }
}

module.exports = {authPage, authGame}

