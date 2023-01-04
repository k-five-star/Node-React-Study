const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 5000

mongoose.connect('mongodb+srv://fivestar:<password>@boilerplate.nfts91g.mongodb.net/?retryWrites=true&w=majority')
.then(() => console.log('mongoDB connected..'))
.catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port} 안녕하세요~~~`)
})