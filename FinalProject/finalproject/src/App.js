import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import {Home, Fiction, Nonfiction} from './pages';
import {Header} from './components';
import { Footer } from './components/Footer';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/fiction" element={<Fiction/>}></Route>
        <Route path="/nonfiction" element={<Nonfiction/>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
    </BrowserRouter>
  );
}

export default App;