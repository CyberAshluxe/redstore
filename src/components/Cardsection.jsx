import React from 'react'
import card1 from '../assets/category-1.jpg'
import card2 from '../assets/category-2.jpg'
import card3 from '../assets/category-3.jpg'

const Cardsection = () => {
  return (
    <>
    <section className=' bg-light p-lg-5'>
        <div className="row p-lg-5 justify-content-center g-4 mx-0">
            <div className="col-lg-4 ">
              <img src={card1} alt="Category 1" className="img-fluid" />
            </div>
            <div className="col-lg-4 ">
              <img src={card2} alt="Category 2" className="img-fluid" />
            </div>
            <div className="col-lg-4 ">
              <img src={card3} alt="Category 3" className="img-fluid" />
            </div>
        </div>
    </section>
      
    </>
  )
}

export default Cardsection
