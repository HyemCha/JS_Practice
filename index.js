const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/sound/:name', (req, res) => {
    const { name } = req.params
    
    if (name == "dog"){
        res.json({'sound' : 'bark'})
    } else if (name == "cat"){
        res.json({'sound' : "meow"})
    } else if (name == "pig"){
        res.json({'sound' : "꿀꿀"})
    } else {
        req.json({'sound' : 'not found'})
    }

})

app.listen(port, () => {
    console.log('aa')
})