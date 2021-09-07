const express = require('express')
const EventEmitter = require('events')
const cors = require('cors')
const config = require('./utils/config')

const { MessageGenerator: Api } = require('./api')

const messageEmitter = new EventEmitter()
messageEmitter.on('status', console.log)
messageEmitter.on('message', console.log)

const api = new Api({ messageCallback: (message) => messageCallback(message) })

const messageCallback = (message) => {
  const formattedMessage = JSON.stringify(message)
  messageEmitter.emit('message', formattedMessage)
}

const app = express()

app.use(cors())

app.get('/start', (req, res) => {
  res.setHeader('Content-type', 'text/play')

  messageEmitter.emit('status', 'Api is started')

  setTimeout(() => api.start(), 2500)

  res.end('Api is started')
})

app.get('/end', (req, res) => {
  res.setHeader('Content-type', 'text/play')

  messageEmitter.emit('status', 'Api is stoped')

  api.stop()

  res.end('Api is stoped')
})

app.get('/sse', (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    Connection: 'keep-alive'
  })

  const onMessage = (message) => res.write(`data: ${message}\n\n`)

  messageEmitter.on('message', onMessage)

  res.on('close', function () {
    messageEmitter.off('message', onMessage)
  })
})

app.listen(config.PORT, () => console.log(`Server is listening in port ${config.PORT}`))
