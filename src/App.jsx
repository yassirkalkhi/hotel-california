import { useState, Suspense , lazy } from 'react'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import "./tailwindcss.css"


const Main = lazy(() =>  import('./pages/main'))
const Reserver = lazy(() =>  import('./pages/reserver'))



function App() {

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Routes>
            <Route path='/' element={<Main />}/>
            <Route path='/reserver' element={<Reserver/>}/> 
            <Route path='*' element={"404"}/>
        </Routes>
      </Router>
      </Suspense>
    </>
  ) 
}

export default App
