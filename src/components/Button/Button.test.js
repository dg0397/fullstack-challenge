import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render,fireEvent } from '@testing-library/react'
import Button from 'components/Button/Button'

describe('<Button />' , () => {
    let component
    const text = 'Clear'
    const mockHandler = jest.fn()

    beforeEach(()=>{
        component = render(
            <Button handleClick = {mockHandler} text = {text}/>
        )
    })

    test('renders content',()=>{
        expect(component.container).toHaveTextContent(text)
    })
    
    test('Clicking button', () =>{
        const button = component.getByText(text)
        
        fireEvent.click(button)
    
        expect(mockHandler.mock.calls).toHaveLength(1)
    })
    
})