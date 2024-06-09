import React from 'react' 
import { Link } from 'react-router-dom'


const CsrCard = (props) => {
 
  return (
    <div className='transition-all duration-1000'>
        <main className="main cursor-pointer">
            <section className="cards-wrapper p-10" 
            data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
                
                <div   className="csr-card transition-all duration-500 card-grid-space">
                    <Link to={`/csr/${props.id}`} className="card"  style={{ backgroundImage: `url(${props.image})` }}>
                    <div>
                        <h1>{props.title}</h1>
                        <p>{props.stitle}</p>
                        <div className="tags">
                        <div className="tag">{props.date}</div>
                        </div>
                    </div>
                    </Link>
                </div>
 
                
            </section>
        </main> 
    </div>
  )
}

export default CsrCard