const fs = require('fs')
const http = require('http')
const url = require('url')

const server = http.createServer((req,res) => {
    console.log(req.url)
    res.end("hello shubha")
})

server.listen(8000, '127.0.0.1' , () => {
    console.log('listing on port 8080')
})