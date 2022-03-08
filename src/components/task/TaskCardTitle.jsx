import React, { useState } from 'react'

export const TaskCardTitle = () => {
  const [isClick, setIsClick] = useState(false);
  const [inputCardTitle, setInputCardTitle] = useState("Title");
  const handleClick = () => {
    setIsClick(true);
  };
  const handleChange = (e) => {
    setInputCardTitle(e.target.value)
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsClick(false);
  }
  const handleBlur = () => {
    setIsClick(false)
  }

  return (
    <div onClick = {handleClick}> {
      isClick ? (<form onSubmit={handleSubmit}><input type="text" onChange={handleChange} onBlur={handleBlur}/></form>) : <h3>{inputCardTitle}</h3>
      }
    </div>
  )
}
