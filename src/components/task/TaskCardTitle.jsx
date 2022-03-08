import React, { useState } from 'react'

export const TaskCardTitle = () => {
  const [isClick, setIsClick] = useState(false);
  const handleClick = () => {
    setIsClick(true);
  };
  return (
    <div onClick={handleClick}>
      {isClick ? (
      <form>
        <input type="text" />
      </form>
      ):<h3>Today</h3>}
    </div>
  )
}
