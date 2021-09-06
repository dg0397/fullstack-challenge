const { generateMessage } = require('./utils/generateMessage')

class MessageGenerator {
  constructor (options) {
    this.messageCallback = options.messageCallback
    this.stopGeneration = false
  }

  stop () {
    this.stopGeneration = true
  }

  start () {
    this.stopGeneration = false
    this.generate()
  }

  isStarted () {
    return !this.stopGeneration
  }

  /**
       * priority from 1 to 3, 1 = error, 2 = warning, 3 = info
       * */
  generate () {
    if (this.stopGeneration) {
      return
    }
    const { message, priority, nextInMS } = generateMessage()
    this.messageCallback({
      message,
      priority
    })
    setTimeout(() => {
      this.generate()
    }, nextInMS)
  }
}

module.exports = { MessageGenerator }
