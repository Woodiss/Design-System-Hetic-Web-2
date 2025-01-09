import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/button/Button'
import { BrowserRouter, Link, Route, Routes, NavLink } from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>
        <Button content={'testtt'} type={'submit'} isDisabled={false}/>
        <Routes>
          <Route path="/testt" element={<Button content={'testtt'} type={'submit'} isDisabled={false}/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
