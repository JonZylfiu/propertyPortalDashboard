import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Main from './pages/Main';
import Properties from './pages/Properties';




function App() {
  return (
    <div className="grid grid grid-cols-[max-content_1fr] min-h-screen h-screen overflow-hidden font-[poppins]">
      {/* <Navbar /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/properties" element={<Properties />} />
      </Routes>
    </div>
  );
}

export default App;
