import React from 'react'
import './Invoice.css'
import './Hr.css'
import Title from './Component/Title/Title'
import BillTo from './Component/BillTo/BillTo'
import Brand from './Component/Brand/Brand'
import Expense from './Component/Expense/Expense'
import Warrenty from './Component/Warrenty/Warrenty'
import TnD from './Component/TnD/TnD'
import Total from './Component/Total/Total'


function Invoice() {
  return (
    <div className='invoice'>
        <Title />
        <hr />
        <BillTo />
        <hr />
        <Brand />
        <hr />
        <Expense />
        <hr className='hr'/>
        <Total />
        <hr className='hr'/>
        <Warrenty />
        <TnD />
    </div>
  )
}

export default Invoice