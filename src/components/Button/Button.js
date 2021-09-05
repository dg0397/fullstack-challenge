import React from 'react'
import { Button } from 'components/Button/styles'

const ButtonContainer = ({handleClick,text,typeBtn}) => {
    return (
        <Button onClick = {handleClick} className="btn" typeBtn = {typeBtn}>
            {text}
        </Button>
    )
}

export default ButtonContainer
