import { useState, Suspense , lazy } from 'react'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import "./tailwindcss.css"
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'


const Main = lazy(() =>  import('./pages/main'))
const Reserver = lazy(() =>  import('./pages/reserver'))
const PaymentSuccess  = lazy(() =>  import('./pages/payment-success'))
const ConfirmPage  = lazy(() =>  import('./pages/chart'))
const ChartTest = lazy(() =>  import('../tests/chart'))
const Restaurant = lazy(() =>  import('./pages/resturant'))
const Beach = lazy(() =>  import('./pages/beach'))
const Fitness = lazy(()=> import('./pages/fitness'))
const Activite = lazy(()=> import('./pages/activite'))



function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Routes>
            <Route path='/' element={<Main />}/>
            <Route path='/reserver' element={<Reserver/>}/> 
            <Route path='/chart' element={<ConfirmPage/>}/> 
            <Route path='/payment-success' element={<PaymentSuccess/>}/> 
            <Route path='/chartTest' element={<ChartTest/>}/> 
            <Route path='/restaurant' element={<Restaurant/>}/> 
            <Route path='/beach' element={<Beach/>}/> 
            <Route path='/fitness' element={<Fitness/>}/> 
            <Route path='/activite' element={<Activite/>}/> 
            <Route path='*' element={"404"}/>
        </Routes>
      </Router>
      </Suspense> 

    </>
  ) 
}

export default App
