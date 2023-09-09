import React from 'react'

const Events = () => {

    const handleClick   = () => {
        alert("You Clicked Me")
    }
  return (
    <div>Events
    <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default Events;