import { useState } from 'react'
import Sidebar from './components/sidebar/Sidebar'
import Main from './components/Main/Main'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Sidebar/>
    <Main />
     
    </>
  )
}

export default App
