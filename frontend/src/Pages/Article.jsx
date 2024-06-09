import React, { useContext } from 'react'
import ArticleCard from '../Components/ArticleCard'
import PageTitle from '../Components/PageTitle'
import articleimg from '../Components/Assets/top_1.jpg'
import { SlqsContext } from '../Context/SlqsContext'

const Article = () => {

  const {articlealldata} = useContext(SlqsContext);

  
  return (

    <>

    <PageTitle name="Article" image={articleimg}/>
    
    
    <div
    
     className=' min-h-screen flex flex-col gap-20 py-10'>
      {articlealldata.map((article) => (
        <div data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-delay="200"
        data-aos-duration="1000"
        >
          <ArticleCard 
            key={article.id}
            title={article.title}
            description={article.description}
            image={article.image}
          />
        </div>
          
        ))}
    </div>
    
    </>
  )
}

export default Article