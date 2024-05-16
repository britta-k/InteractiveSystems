import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import {Home, ProductDetail, ProductList, Contact, Admin, NotFound} from './pages';
import {Header, Footer} from './components';

import './App.css';


function App() {
  const isAdmin = true;
  return (
    <BrowserRouter>
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
        <Route path="/product" element={<ProductList/>}></Route>
        <Route path="/product/:id" element={<ProductDetail/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/admin" element={isAdmin? <Admin/> : <Navigate to="/"></Navigate>}></Route>
      </Routes>
    </div>
    <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
