import React from 'react'
import img from '../Components/Assets/slider4.jpg'
const CsrCard = () => {
  return (
    <div className='transition-all duration-1000'>
        <main className="main cursor-pointer">
            <section className="cards-wrapper p-10" 
            data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
                
                <div   className="csr-card transition-all duration-500 card-grid-space">
                    <a className="card"  style={{ backgroundImage: `url(${img})` }}>
                    <div>
                        <h1>title</h1>
                        <p>subtitle</p>
                        <div className="tags">
                        <div className="tag">date</div>
                        </div>
                    </div>
                    </a>
                </div>
                
            </section>
        </main> 
    </div>
  )
}

export default CsrCard