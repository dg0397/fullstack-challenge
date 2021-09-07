import React from 'react'

import Button from 'components/Button/Button'
import { Notify } from 'components/Notify/styles'

import useNotify from 'hooks/useNotify'

const NotifyComponent = () => {
  const { notify, updateNotify } = useNotify()

  return (
    <>
      {
        notify &&
        (
          <Notify notify={notify} id='notify'>
            <p>{notify}</p>
            <Button handleClick={() => updateNotify('')} text='Clear' typeBtn='notify' />
          </Notify>
        )
      }
    </>
  )
}

export default NotifyComponent
