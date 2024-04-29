import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./HomePage";
import Litigation from "./components/Practise/Litigation";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route path="/" element={HomePage} /> */}
          <Route path="/" element={<HomePage />} />
          <Route path="/litigation-dispute" element={<Litigation />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
