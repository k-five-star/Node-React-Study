const { response } = require('express')
const express = require('express')
const mongoose = require('mongoose')
const { User } = require('./models/User')
const config = require('./config/key')
const app = express()
const port = 3000

mongoose.connect(config.mongoURI)
.then(() => console.log('mongoDB connected..'))
.catch(err => console.log(err))

app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.get('/', (req, res) => {
  res.send('Hello World! 새해 복 많이 받으세요!!')
})

// app.post('/register', async (request, reponse) => {
//     //회원 가입시 필요한 정보들을 클라이언트에서 가져오면
//     //그것들을 DB에 넣어준다.
//     console.log(request.body)

//     const user = await new User(request.body)

//     await user.save()
// })



app.listen(port, () => {
    console.log(`Example app listening on port ${port} 안녕하세요~~~`)
})

