import React from 'react'
import { useSelector } from 'react-redux'

const Name = () => {
  const name = useSelector((state) => state.name.value)

  return (
    <div>
        Team {name}
    </div>
  )
}

export default Name