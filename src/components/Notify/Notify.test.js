import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'

import Context, { MessagesContextProvider } from 'context/ContextMessages'

import Notify from 'components/Notify/Notify'

describe('<Notify />', () => {
  const message = 'This is a message'

  let component

  beforeEach(() => {
    component = render(
      <MessagesContextProvider>
        <Context.Consumer>
          {
            value => {
              value.setNotify(message)
              return <Notify />
            }
          }
        </Context.Consumer>
      </MessagesContextProvider>
    )
  })

  test('renders content', () => {
    expect(component.container).toHaveTextContent(message)
  })
  test('renders styled notify component', () => {
    const div = component.container.querySelector('#notify')

    expect(div).toBeDefined()
  })

  describe('Notify renders Button Component', () => {
    test('renders Button component', () => {
      const div = component.container.querySelector('.btn')

      expect(div).toBeDefined()
    })
    test('Message has the correct button', () => {
      const button = component.getByText('Clear')

      expect(button).toBeDefined()
    })
  })
})
