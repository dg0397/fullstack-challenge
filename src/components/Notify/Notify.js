import React from 'react'

import Button from 'components/Button/Button'
import { Notify } from 'components/Notify/styles'

import useNotify from 'hooks/useNotify'

const NotifyComponent = () => {
  const { notify, updateNotify } = useNotify()
  // console.log(notify)

  return (
    <>
      {
                notify &&
                (
                  <Notify notify={notify}>
                    <p>{notify}</p>
                    <Button handleClick={() => updateNotify('')} text='Clear' typeBtn='notify' />
                  </Notify>
                )
            }
    </>
  )
}

export default NotifyComponent
