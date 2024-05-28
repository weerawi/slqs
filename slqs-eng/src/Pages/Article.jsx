import React, { useContext } from 'react'
import ArticleCard from '../Components/ArticleCard'
import PageTitle from '../Components/PageTitle'
import articleimg from '../Components/Assets/top_1.jpg'
import { SlqsContext } from '../Context/SlqsContext'

const Article = () => {

  const {article_data} = useContext(SlqsContext);

  
  return (

    <>

    <PageTitle name="Article" image={articleimg}/>
    
    <div className=' min-h-screen flex flex-col gap-20 py-10'>
      {article_data.map((article) => (
          <ArticleCard 
            key={article.id}
            title={article.title}
            description={article.description}
            image={article.image}
          />
        ))}
    </div>
    
    </>
  )
}

export default Article