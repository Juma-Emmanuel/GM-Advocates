import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Litigation from "./components/Practise/Litigation";
import TechnologyLaw from "./components/Practise/TechnologyLaw";
import CorporateCommercial from "./components/Practise/CorporateCommercial";
import RealEstateProperty from "./components/Practise/RealEstateProperty";
import AviationLawPractise from "./components/Practise/AviationLawPractise";
import ProcurementLaw from "./components/Practise/ProcurementLaw";
import People from "./components/People/People";
import Catherine from "./pages/Catherine";
import John from "./pages/John";
import Godffrey from "./pages/Godffrey";
import Andrew from "./pages/Andrew";
import ScrollToTop from "./ScrollToTop";
import Careers from "./pages/Careers";
import JobDetail from "./pages/JobDetail";
import Neema from "./pages/Neema";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/careers/" element={<Careers />} />
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
          <Route path="/our-people/" element={<People />} />
          <Route path="/our-people/catherine-mwinzi/" element={<Catherine />} />
          <Route path="/our-people/john-wekesa/" element={<John />} />
          <Route path="/our-people/godfrey-orina/" element={<Godffrey />} />
          <Route path="/our-people/andrew-wanga/" element={<Andrew />} />
          <Route path="/our-people/neema-joanne/" element={<Neema />} />
          <Route path="/careers/vacancy/" element={<JobDetail />} />
          <Route path="/job/:id" element={<JobDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
