import './App.css'
import Home from './assets/Components/Functinal component/Home'
import About from './assets/Components/Functinal component/About'
import Contact from './assets/Components/Functinal component/Contact'
import Gallery from './assets/Components/Functinal component/Gallery'
import Navbar from './assets/Components/functinal component/Navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {

  return (
      <div>
        <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/"element={<Home/>}/>
            <Route path="/about"element={<About/>}/>
            <Route path="/contact"element={<Contact/>}/>
            <Route path="/Gallery"element={<Gallery/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
