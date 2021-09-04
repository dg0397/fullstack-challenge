import React from 'react'
import Button from 'components/Button'

const ButtonsContainer = ({deleteAll,switchApp,textLeft,textRight}) => {
    return (
        <div id = 'btn-container'>
            <Button handleClick = {switchApp} text = {textLeft}/>
            <Button handleClick = {deleteAll} text = {textRight}/>
        </div>
    )
}

export default ButtonsContainer
