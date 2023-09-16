import React from 'react'
import './Portfolio.css'
import Line from '../Line/Line'

export default function Portfolio() {
  return (
    <div className='portfolio py-5'>
      <h2 className='fw-bolder text-center'>Portfolio COMPONENT</h2>
      <Line/>

<div className="container">
  <div className="row g-5 p-5">
    <div className='col-md-4'>
      <div className="parent">
      <img className='w-100 rounded' src="https://routeegy.github.io/startFramework/assets/images/poert1.png" alt="" />
      <div className="layer rounded  d-flex ">
        <i className='text-white fa-solid fa-plus fa-6x'></i>
      </div>
      </div>
    </div>
    <div className='col-md-4'>
      <div className="parent">
      <img className='w-100 rounded' src="https://routeegy.github.io/startFramework/assets/images/port2.png" alt="" />
      <div className="layer rounded  d-flex ">
        <i className='text-white fa-solid fa-plus fa-6x'></i>
      </div>
      </div>
    </div>
    <div className='col-md-4'>
      <div className="parent">
      <img className='w-100 rounded' src="https://routeegy.github.io/startFramework/assets/images/port3.png" alt="" />
      <div className="layer rounded  d-flex ">
        <i className='text-white fa-solid fa-plus fa-6x'></i>
      </div>
      </div>
    </div>
    <div className='col-md-4'>
      <div className="parent">
      <img className='w-100 rounded' src="https://routeegy.github.io/startFramework/assets/images/poert1.png" alt="" />
      <div className="layer rounded  d-flex ">
        <i className='text-white fa-solid fa-plus fa-6x'></i>
      </div>
      </div>
    </div>
    <div className='col-md-4'>
      <div className="parent">
      <img className='w-100 rounded' src="https://routeegy.github.io/startFramework/assets/images/port2.png" alt="" />
      <div className="layer rounded  d-flex ">
        <i className='text-white fa-solid fa-plus fa-6x'></i>
      </div>
      </div>
    </div>
    <div className='col-md-4'>
      <div className="parent">
      <img className='w-100 rounded' src="https://routeegy.github.io/startFramework/assets/images/port3.png" alt="" />
      <div className="layer rounded  d-flex ">
        <i className='text-white fa-solid fa-plus fa-6x'></i>
      </div>
      </div>
    </div>
  </div>
</div>
</div>
  )
}

