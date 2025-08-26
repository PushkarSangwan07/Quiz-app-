import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Page1 from './Routes/Page1'
import Page2 from './Routes/Page2'
import Page3 from './Routes/Page3'
import Page4 from './Routes/Page4'
import Result from './Routes/Result'
import LoginButton from './Routes/Login'
import { ScoreProvider } from './Routes/useContext'


function RouterEg() {
  return (
    <div>
      <ScoreProvider>
        <Routes>
          <Route path ='/' element={<LoginButton/>} />
          <Route path='/page1' element={<Page1 />} />
          <Route path='/page2' element={<Page2 />} />
          <Route path='/page3' element={<Page3 />} />
          <Route path='/page4' element={<Page4 />} />
          <Route path='/result' element={<Result />} />

        </Routes>
      </ScoreProvider>
    </div>
  )
}

export default RouterEg