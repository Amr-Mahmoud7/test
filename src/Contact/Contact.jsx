import React from 'react'
import Line from '../Line/Line'
import './Contact.css'


export default function Contact() {
  return (
    <div className='contact  text-center py-5 '>
    <h2 className='fs-1 fw-bolder'>CONATCT SECTION</h2>
    <Line/>

    <div className="container py-5">
        <div className="row justify-content-center">
            <div className='col-md-6'>
                <form>
                    <div className="form-inputs">
                <input type="text" className="form-control"  placeholder=" userName"/>
                <input type="number" className="form-control"  placeholder=" userAge"/>
                <input type="email" className="form-control"  placeholder=" userEmail"/>
                <input type="password" className="form-control hiding"  placeholder=" userPassword"/>
                    </div>
                <div className='d-flex'>
                <button type="submit" className="  px-4 ">Send Message</button>
                </div>
                </form>
            </div>
        </div>
    </div>
    
</div>
  )
}
