import React from 'react'
import Button from 'components/Button/Button'
import useMessages from 'hooks/useMessages'

const ButtonsContainer = () => {
    const {isApiStarted,switchApp,deleteAllMessages} = useMessages()
    return (
        <div id = 'btn-container'>
            <Button handleClick = {switchApp} text = { isApiStarted ? 'Stop' : 'Start'}/>
            <Button handleClick = {deleteAllMessages} text = 'Clear'/>
        </div>
    )
}

export default ButtonsContainer
