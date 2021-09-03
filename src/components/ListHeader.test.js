import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import ListHeader from 'components/ListHeader'

describe('<ListHeader />' , () => {
    let component

    beforeEach(()=>{
        component = render(
            <ListHeader count = {10} type = 'Info' id ={3}/>
        )
    })

    test('renders content',()=>{
        expect(component.container).toHaveTextContent('Info Type 3')
        expect(component.container).toHaveTextContent('Count 10')
    })
})