import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './scoreSlice'

export function Score() {
  const score = useSelector((state) => state.score.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{score}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}