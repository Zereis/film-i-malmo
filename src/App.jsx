import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={"404 Not Found"} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
