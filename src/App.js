import './App.css';
import { Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/:workspace" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
