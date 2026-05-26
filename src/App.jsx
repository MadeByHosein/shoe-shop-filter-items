import './App.css'
import { Recommended, Sidebar } from './Home'
import Nav from './Home/Nav/Nav'
import Products from './Home/Products/Products'

function App() {

  return <>
  <div className='flex'>
      <Sidebar /> 
      <div className='flex-1'>
        <Recommended/>
        <Products />
      </div> 
  </div>

  </>
}

export default App
