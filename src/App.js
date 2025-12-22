import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Main from './pages/Main';




function App() {
  return (
    <div className="grid grid-cols-[20rem_1fr] min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<>about</>} />
      </Routes>
    </div>
  );
}

export default App;
