import Front from './layout/Front'
import HostLayout from './layout/HostLayout'
import HostVanCardDetailLayput from './layout/HostVanCardDetailLayout'


import About from './pages/Vans/About'
import Vans from './pages/Vans/Vans'
import Home from './pages/Vans/Home'
import VanDetail from './pages/Vans/VanDetail'

import Dashboard from './pages/Host/Dashboard'
import HostVans  from './pages/Host/HostVans' 
import Income from './pages/Host/Income'
import Reviews from './pages/Host/Reviews'

import HostVanDetail from './pages/Host/HostVanDetail'
import HostVanImage from './pages/Host/HostVanImage'
import HostVanPrice from './pages/Host/HostVanPrice'

import PageNotFound from './pages/PageNotFound'

import { BrowserRouter , Routes , Route,
createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import '../server.js'


  
function App() {

  const router = createBrowserRouter( createRoutesFromElements(
          <Route path='/'element={<Front />} >
              <Route index element={<Home />} />
              <Route path='about' element={<About />} />
              <Route path='vans' element={<Vans />} />
              <Route path='vans/:id' element={ <VanDetail />} />
              <Route path='host' element={ <HostLayout />} >
                <Route index element={ <Dashboard />} />
                <Route path='income' element={ <Income />} />
                <Route path='vans' element={ <HostVans />} />
                <Route path='vans/:id' element={ <HostVanCardDetailLayput />} >
                  <Route index element={<HostVanDetail/>} />
                  <Route path='image' element={<HostVanImage />} />
                  <Route path='price' element={<HostVanPrice/>} />
                </Route>
                <Route path='reviews' element={ <Reviews />} />
              </Route>
            <Route path='*' element={<PageNotFound />} />
        </Route>
  ) )
  
  return (
    <RouterProvider router={router} />   
  )
}



export default App
