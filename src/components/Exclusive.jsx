import React from 'react'
import wacth from "../assets/exclusive.png"
import { MoveRight } from "lucide-react";

const Exclusive = () => {
  return (
    <>
      <section className='container py-5'>
        <div className="row justify-content-between align-items-center vh-100 mx-0">
            <div className="col-md-6">
                <img src={wacth} alt=""  width={500}/>
            </div>
            <div className="col-md-6">
                <p className='text-muted'>Exclusive Available on RedStore</p>
                <h1 className='fw-bolder'>Smart Band 4</h1>
                <p className='lead'>The Mi Smart Band 4 features a 39.9% larger (than Mi Band 3) AMOLED color full-touch display with adjustable brightness, so everything is clear as can be.</p>
                <button className='btn btn-danger rounded-pill'>Buy Now <MoveRight /></button>
            </div>
        </div>
      </section>
    </>
  )
}

export default Exclusive
