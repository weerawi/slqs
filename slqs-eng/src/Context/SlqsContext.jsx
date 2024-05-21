import React, { createContext } from 'react'
import csr_data from '../Components/Assets/csr_data'
import gallery_data from '../Components/Assets/gallery_data'

export const SlqsContext = createContext(null);

const SlqsContextProvider = (props) => {


  const contextValue = {
    csr_data,
    gallery_data
  }

  return (
    <SlqsContext.Provider value={contextValue}>
      {props.children}
    </SlqsContext.Provider>
  )
}

export default SlqsContextProvider