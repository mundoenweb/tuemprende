// server.js

const { createServer } = require('http')

const { parse } = require('url')

const next = require('next')



const dev = false

const app = next({ dev })

const handle = app.getRequestHandler()



app.prepare().then(() => {

  createServer((req, res) => {
    const parsedUrl = parse(req.url, true)
    handle(req, res, parsedUrl)
  }).listen(3333, (err) => {

    if (err) throw err

    console.log('> listo el servidor en el puerto http://localhost:3333')

  })

})
