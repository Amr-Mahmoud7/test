import React from 'react'
import '../Footer/Footer.css'

export default function Footer() {
  return (
    <div className='footer  text-center text-white pt-5'>
        <div className="container-fluid py-5">
          <div className="row text-center justify-content-around">
            <div className='col-md-3 py-2'>
              <h2>LOCATION</h2>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>
            <div className='col-md-3'>
              <h2>AROUND THE WEB</h2>
              <div className='footer-icns d-flex justify-content-center'>

              <div class="circle">
              <i className='fa-brands fa-facebook '></i>
              </div>
              <div class="circle">
              <i className='fa-brands fa-twitter'></i>
              </div>
              <div class="circle">
              <i className='fa-brands fa-linkedin'></i>
              </div>
              <div class="circle">
              <i className='fa-solid fa-globe '></i>
              </div>
                
                
                
                
              </div>
            </div>
            <div className='col-md-3'>
              <h2>ABOUT FREELANCER</h2>
              <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>
          </div>

        </div>
        <div className="container-fluid">
          <div className="row">
          <div className='col-md-12 py-4'>Copyright © Your Website 2021</div>
          </div>
        </div>
        </div>
  )
}
