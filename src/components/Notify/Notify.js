import React from 'react'
import Button from 'components/Button/Button'
import useNotify from 'hooks/useNotify'

const Notify = () => {
    const {notify,updateNotify} = useNotify()
    console.log(notify)

    return (
        <>
            {
                notify 
                && (
                    <div id='notify'>
                        <p>{notify}</p>
                        <Button handleClick = {()=>updateNotify('')} text = 'Clear'/>
                    </div>
                )
            }
        </>
    )
}

export default Notify
