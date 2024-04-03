import React from 'react'

const Pyramid = ({ questionNumber, pyramid }) => {
  return (
    <div className="pyramid">
      <ul className="moneyList">
        {pyramid.map((m) => (
          <li
            className={
              questionNumber === m.id
                ? "moneyListItem active"
                : "moneyListItem"
            }
          >
            <span className="moneyListItemNumber">{m.id}</span>
            <span className="moneyListItemAmount">{m.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Pyramid