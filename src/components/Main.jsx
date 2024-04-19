import React from 'react'
import Profile from './Profile'
import Status from './Status'

function Main() {
  return (
    <>
        <div className='grid grid-cols-2'>
            <div className='' style={{marginLeft:'266px'}}>
                <Status/>
            </div>
            <div>
                <Profile/>
            </div>
        </div>
        
    </>
  )
}

export default Main