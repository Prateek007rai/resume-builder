import { useState } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Components/Home';
import Navbar from "./Components/Navbar";
import Resume from './Components/Resume';
import Start from './Components/Start';

function App() {

  const [resume , setResume] = useState({});

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/Home' element={<Home resume={resume} setResume={setResume} />} />
        <Route path='/resume' element={<Resume resume={resume} setResume={setResume} />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
