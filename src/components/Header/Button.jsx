import React from 'react'

function Button({
  childern, 
  type = 'button ', 
  bgColor = 'bg-blut-500',
  textColor = 'text-white',
  className = "",
  ...props 
}) {
  return (
    <button className= {`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className} `} {...props} >
      {childern}
    </button>
  )
}

export default Button