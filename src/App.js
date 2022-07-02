import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import ListFligth from './components/ListFligth';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listfligth" element={<ListFligth />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
