import {BrowserRouter, Routes, Route} from 'react-router-dom';
//import {home} from './components/Home';
import './App.css';
import {NotFound} from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <div>Hello</div>
      <Routes>
        <Route path="/" element={<home/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
