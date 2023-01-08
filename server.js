const express = require('express')
const app = express()
const cors = require('cors')

//app.use(express.urlencoded({extended: false}))


//const register = require('./api/register')
//const login = require('./api/login')
const log = require('./api/log')
const signup = require('./api/signup')
const signin = require('./api/signin')
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

//app.use('/register', register);
//app.use('/login', login);
app.use('/log', log);
app.use('/signup', signup);
app.use('/signin', signin);

app.listen(PORT, () => {
  console.log('Example app listening on port' + PORT)
})