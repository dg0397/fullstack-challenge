const {generateMessage} = require("../utils/generateMessage")

describe('generateMessage returns one valid message', () => {
  const {message,priority,nextInMS} = generateMessage()

  test('message is a valid string',()=>{
      expect(message).not.toBeFalsy()
      expect(typeof(message)).toBe('string')
  })
  test('priotiry must be a value in betweend [1-3]',()=>{
      expect(priority).toBeLessThanOrEqual(3)
      expect(priority).toBeGreaterThanOrEqual(1)
      expect(typeof(priority)).toBe('number')
  })
  test('nextInMS must be a value in betweend [500,3000]',()=>{
      expect(nextInMS).toBeLessThanOrEqual(3000)
      expect(nextInMS).toBeGreaterThanOrEqual(500)
      expect(typeof(nextInMS)).toBe('number')
  })
})
