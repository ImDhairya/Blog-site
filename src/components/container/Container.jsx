import React from 'react'

function Container({children}) {
  //container is nothing but just a styling property which accepts children in it and that will be displayed as they are
  return <div className="w-full max-w-7xl mx-auto px-4">{children}</div>;
}

export default Container