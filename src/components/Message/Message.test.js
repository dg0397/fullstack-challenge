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
      <Message message={messageData} />
    )
  })

  test('renders content', () => {
    expect(component.container).toHaveTextContent(messageData.message)
  })

  test('message has the correct color', () => {
    const div = component.container.querySelector('.message')

    expect(div).toHaveStyle('background-color : rgb(252, 231, 136)')
  })
  // test('Cleaning message btn', () =>{
  //    const button = component.getByText('Clear')
  //
  //    fireEvent.click(button)
  //
  //    expect(mockHandler.mock.calls).toHaveLength(1)
  // })
})
