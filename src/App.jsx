import { useState } from 'react'
import Front from './Front'
import { BrowserRouter} from 'react-router-dom'

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
    <BrowserRouter>
      <div className="App">
        <Front />
      </div>
    </BrowserRouter>
    
  )
}



export default App
