import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import {Home, Fiction, Nonfiction} from './pages';
import {Header} from './components';

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
    </div>
    </BrowserRouter>
  );
}

export default App;