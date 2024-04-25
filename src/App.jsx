import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './Component/Header'

function App() {
  
  return (
    <>
      <h1 className='text-4xl font-bold'>User management Clint Site</h1>
      <Header></Header>
      <Outlet></Outlet>
      
    </>
  )
}

export default App
