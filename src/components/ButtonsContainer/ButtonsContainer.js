import React from 'react'
import Button from 'components/Button/Button'
import useMessages from 'hooks/useMessages'
import { ButtonsContainer } from 'components/ButtonsContainer/styles'

const ButtonsContainerComponent = () => {
  const { isApiStarted, switchApp, deleteAllMessages } = useMessages()
  return (
    <ButtonsContainer>
      <Button handleClick={switchApp} text={isApiStarted ? 'Stop' : 'Start'} typeBtn='menu' />
      <Button handleClick={deleteAllMessages} text='Clear' typeBtn='menu' />
    </ButtonsContainer>
  )
}

export default ButtonsContainerComponent
