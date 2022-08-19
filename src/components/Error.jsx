import { useState, useEffect } from "react"
const Error = ({children}) => {
  return (
    <div className="bg-red-800 text-white uppercase font-bold rounded-md p-3 w-full">
    <p> {children}</p>
    </div>
  )
}

export default Error
