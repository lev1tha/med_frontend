import React from 'react'

interface Props {
    elem?: any
}

export const Modal = ({ elem }: Props) => {
    return (
        <div className='modal'>
            <div className='modal_yellow'>
                <div className='modal_content'>
                    <div className='modal_padd'>
                        {elem}
                    </div>
                </div>
            </div>
        </div>
    )
}
