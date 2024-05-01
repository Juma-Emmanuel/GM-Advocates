import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Litigation from "./components/Practise/Litigation";
import TechnologyLaw from "./components/Practise/TechnologyLaw";
import CorporateCommercial from "./components/Practise/CorporateCommercial";
import RealEstateProperty from "./components/Practise/RealEstateProperty";
import AviationLawPractise from "./components/Practise/AviationLawPractise";
import ProcurementLaw from "./components/Practise/ProcurementLaw";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/procurement-law/" element={<ProcurementLaw />} />
          <Route path="/litigation-dispute/" element={<Litigation />} />
          <Route
            path="/technology-ip-internetlaw/"
            element={<TechnologyLaw />}
          />
          <Route
            path="/corporate-commercial-law/"
            element={<CorporateCommercial />}
          />
          <Route
            path="/real-estate-property-law/"
            element={<RealEstateProperty />}
          />
          <Route
            path="/aviation-law-practise/"
            element={<AviationLawPractise />}
          />
          <Route path="/procurement-law/" element={<ProcurementLaw />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
