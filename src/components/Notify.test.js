import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render,fireEvent } from '@testing-library/react'
import Notify from 'components/Notify'

describe('<Notify />' , () => {
    const message = 'This is a message'

    const mockHandler = jest.fn()

    let component

    beforeEach(()=>{
        component = render(
            <Notify message = {message} setMessage = {mockHandler}/>
        )
    })

    test('renders content',()=>{
        expect(component.container).toHaveTextContent(message)
    })

    //test('message has the correct color', () => {
    //    const div = component.container.querySelector('.message')
//
    //    expect(div).toHaveStyle('background-color : rgb(252, 231, 136)')
    //})
    test('Cleaning message btn', () =>{
        const button = component.getByText('Clear')
        
        fireEvent.click(button)
    
        expect(mockHandler.mock.calls).toHaveLength(1)
    })
    
})