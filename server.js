const express = require('express')
const app = express()
const cors = require('cors')
const log = require('./api/log')
const signup = require('./api/signup')
const signin = require('./api/signin')
const update = require('./api/update')



const PORT = process.env.PORT||4000



app.get('/', (req, res) => {
  res.send('Hello World!')
  //res.json({message:' json message!'})
})

app.use((req, res, next) => {
	console.log(`${req.method} ${req.url}`, req.params);
	next()
})


app.use(express.json())
app.use(cors())

app.use('/log', log);
app.use('/signup',signup)
app.use('/signin',signin)
app.use('/update',update)

app.listen(PORT, () => {
  console.log('Example app listening on port' + PORT)
})