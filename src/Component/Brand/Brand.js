import React from 'react'
import './Brand.css'
import DeviceBrand from './BrandFiles/DeviceBrand'
import Model from './BrandFiles/Model'

function Brand() {
  return (
    <div className='brand'>
      <DeviceBrand />
      <Model />
    </div>
  )
}

export default Brand