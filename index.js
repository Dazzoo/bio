const express = require('express')
const app = express()
port = 80


app.get("/", async (req, res) => {
    res.end(JSON.stringify({Test: "Test response."}))
})

app.listen( port, () => {
    console.log(`server is running on port ${port}`)
    console.log(`press CTRL+C to stop server`)
} )