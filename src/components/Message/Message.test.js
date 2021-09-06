import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Message from 'components/Message/Message'

describe('<Message />', () => {
  const messageData = {
    message: 'This is a message',
    priority: 2
  }

  let component

  beforeEach(() => {
    component = render(
      <Message message={messageData.message} priority={messageData.priority} />
    )
  })

  test('renders content', () => {
    expect(component.container).toHaveTextContent(messageData.message)
  })

  test('renders styled message component', () => {
    const div = component.container.querySelector('.message')

    expect(div).toBeDefined()
  })

  describe('Message renders Button Component', () => {
    test('renders Button component', () => {
      const div = component.container.querySelector('.btn')

      expect(div).toBeDefined()
    })
    test('message has the correct button', () => {
      const button = component.getByText('Clear')

      expect(button).toBeDefined()
    })
  })
})
