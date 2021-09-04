import React from 'react'

const Button = ({handleClick,text}) => {
    return (
        <button onClick = {handleClick} className="btn">
            {text}
        </button>
    )
}

export default Button
