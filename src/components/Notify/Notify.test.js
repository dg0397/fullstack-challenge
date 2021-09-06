import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import { MessagesContextProvider } from 'context/ContextMessages'
import Notify from 'components/Notify/Notify'
import useNotify from 'hooks/useNotify'

describe('<Notify />', () => {
  const message = 'This is a message'

  const mockHandler = jest.fn()

  let component

  beforeEach(() => {
    const { updateNotify } = useNotify()

    component = render(
      <MessagesContextProvider>
        <Notify />
        {
                    updateNotify(message)
                }
      </MessagesContextProvider>
    )
  })

  test('renders content', () => {
    expect(component.container).toHaveTextContent(message)
  })

  // test('message has the correct color', () => {
  //    const div = component.container.querySelector('.message')
  //
  //    expect(div).toHaveStyle('background-color : rgb(252, 231, 136)')
  // })
  test('Cleaning message btn', () => {
    const button = component.getByText('Clear')

    fireEvent.click(button)

    expect(mockHandler.mock.calls).toHaveLength(1)
    expect(component.container).not.toHaveTextContent(message)
  })
})
