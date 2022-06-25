import React from 'react'
import './BillTo.css'
import Details from './BillToFiles/Details'
import InvoiceData from './BillToFiles/InvoiceData'

function BillTo() {
  return (
    <div className='billTo'>
      <Details />
      <InvoiceData />
    </div>
  )
}

export default BillTo