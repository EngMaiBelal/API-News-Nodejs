const express = require('express')
const newsRouter=require('./routers/news.js')

//to connect db ---> must after app
require('./db/mongoose')

//intialize variable store to our express app
const app = express()
app.use(express.json())
app.use(newsRouter)

//declare to port
const port = 3000


app.listen(port,()=> console.log('server is running'))