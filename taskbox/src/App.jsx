import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/button/Button'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Button content={'testtt'} type={'submit'} isDisabled={false}/>
  )
}

export default App
