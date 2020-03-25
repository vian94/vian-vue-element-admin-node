const express = require('express')
const router = require('./router')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(cors({
    origin: 'http://localhost:9527'
}))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/', router)

const server = app.listen('18082', function () {
    const { port } = server.address();
    console.log(`http服务已在${port}端口启动..`);
})