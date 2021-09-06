const random = require('lodash/random')
const faker = require('faker')

const generateMessage = () => {
    const message = faker.lorem.sentence();
    const priority = random(1, 3)
    const nextInMS = random(500, 3000)

    return {message,priority,nextInMS}
}

module.exports = { generateMessage }