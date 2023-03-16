import { useState } from 'react'
import Front from './Front'
import { BrowserRouter, Routes, Route , Link} from 'react-router-dom'

// return(
  //   <BrowserRouter>
  //     <Link to='/'>Home</Link>
  //     <Link to='/about'>About Page</Link>
  //     <Routes>
  //       <Route path='/' element={ <Home />} />
  //       <Route path='/about' element ={<About />} />
  //     </Routes>
  //   </BrowserRouter>
  // )
  
function App() {
  
  return (
    <div className="App">
      <Front />
    </div>
  )
}

function Home(){
  return(
    <h1>Hello, React Router!</h1>
  )
}

function About(){
  return(
    <h1>About Page</h1>
  )
}

export default App
