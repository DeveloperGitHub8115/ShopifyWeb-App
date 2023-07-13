import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { NavigationBar } from './Component/NavigationBar';
import { Home } from './Component/Home';
import { Feature } from './Component/Features';
import { contact } from './Component/Contact';
import { About } from './Component/About';

// import { useEffect, useState } from 'react';
// import { fetchData } from './Component/Services';
import { SignUp } from './Component/SignUp';
import { SignIn } from './Component/SignIn';
import { AddToCart } from './Component/Add';

function App() {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   handleData();
  // }, []);

  // const handleData = async () => {
  //   const response = await fetchData();
  //   setData(response.data[0].products);
  // };

  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Feature />} />
          <Route path="/contact" element={<contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/addtocart" element={<AddToCart />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/signin' element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
