import React from 'react'
import img from '../Components/Assets/slider4.jpg'

const BlogMedia = (props) => {
  return (
    <div className='h-[100vh] bg-cyan-400'>BlogMedia

        <div className=''>
            {props.category}


   
            <main className="main">
      <section className="cards-wrapper" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
         
          <div   className="csr-card card-grid-space">
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
    </div>
  )
}

export default BlogMedia