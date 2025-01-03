import './App.css';
import Home from './assets/Components/Functinal component/Home';
import About from './assets/Components/Functinal component/About';
import Contact from './assets/Components/Functinal component/Contact';
import Gallery from './assets/Components/Functinal component/Gallery';
import Navbar from './assets/Components/Functinal component/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UseEffect from './assets/Components/Functinal component/UseEffect';
import UseRef from './assets/Components/Functinal component/UseRef';
import UseContext from './assets/Components/Functinal component/UseContext';
import UseMemo from './assets/Components/Functinal component/UseMemo';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/use-effect" element={<UseEffect />} />
          <Route path="/use-ref" element={<UseRef />} />
          <Route path="/use-context" element={<UseContext />} />
          <Route path="/use-memo" element={<UseMemo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;