import React, { createContext, useState } from 'react'

export const CanPrintContext = createContext()

const CanPrintProvider = (props) => {
  const [canPrint, setCanPrint] = useState([])
  return (
    <CanPrintContext.Provider value={[canPrint, setCanPrint]}>
      {props.children}
    </CanPrintContext.Provider>
  )
}
export default CanPrintProvider
