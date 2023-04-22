import './App.css';
import Header from './Components/Header.js';
import Home from './Pages/Home.js';
import { Route, Routes } from "react-router-dom";
import Instructor from './Pages/Instructor';
import Module from './Pages/Module';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/Instructor" element={<Instructor />} />
        <Route exact path="/Module" element={<Module />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
