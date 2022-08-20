const express = require('express')


const PORT = process.env.PORT

const app = express()


app.get("/ping", (req, res) => {
    res.status(200).send("pong\n")
})
app.listen(PORT, () => {
    console.log(`server listenning on port ${PORT}`)
})
