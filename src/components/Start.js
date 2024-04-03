import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { update } from '../features/name/nameSlice'

const Start = () => {
  const dispatch = useDispatch()
  const [name, setName] = useState()

  const handleChange = (e) => {
    setName(e.target.value)
  }

  const joinGame = () => {
    dispatch(update(name))
  }

  return (
    <div className='start'>
      <input placeholder='Enter name' onInput={handleChange} />
      <button className='join-button' onClick={joinGame} >
        Join
      </button>
    </div>
  )
}

export default Start