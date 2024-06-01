import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
// import Hero from './Components/Hero';
import Footer from './Components/Footer';
import OurFood from './Components/OurFood';
import Home from './Components/Home';
import AboutUS from './Components/AboutUS';
import SignIn from './Components/SignIn';
import { useState } from 'react';



function App() {

  const [count, setCount] = useState(0);

  const handleAdd = ()=>{
    setCount(count + 1)
  }
  return (
    <>
      <BrowserRouter>
        <Header count={count} />
        <Routes>
          <Route path="/" element={<Home handleAdd={handleAdd} />} />
          <Route path="/aboutus" element={<AboutUS />} />
          
          <Route path="/ourfood" element={<OurFood handleAdd={handleAdd} />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
