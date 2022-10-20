import React, { useContext } from 'react'
import { CanPrintContext } from './CanPrintProvider'

function PrintButton() {
  const [canPrint] = useContext(CanPrintContext)

  return (
    <button
      className='printCV'
      onClick={() => {
        window.print()
      }}
      disabled={canPrint.length !== 0}>
      {canPrint.length !== 0
        ? 'Please fill all fields and confirm changes'
        : 'Print'}
    </button>
  )
}

export default PrintButton
