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
import Anne from "./pages/Catherine";
import John from "./pages/John";
import Godffrey from "./pages/Godffrey";
import Andrew from "./pages/Andrew";
import ScrollToTop from "./ScrollToTop";
import Careers from "./pages/Careers";
import JobDetail from "./pages/JobDetail";
import Neema from "./pages/Neema";
import DataProtection from "./components/Practise/DataProtection";
import FamilyMarriage from "./components/Practise/FamilyMarriage";
import NotarialServices from "./components/Practise/NotarialServices";
import InvestmentFranchise from "./components/Practise/InvestmentFranchise";
import BlogGrid from "./components/Articles/blog_grid";
import ArticlesDetail from "./pages/ArticlesDetail";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/careers/" element={<Careers />} />
          <Route path="/blog/" element={<BlogGrid />} />
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
          <Route
            path="/it-data-protection-crypto/"
            element={<DataProtection />}
          />
          <Route
            path="/family-marriage-succession/"
            element={<FamilyMarriage />}
          />
          <Route
            path="/notarial-services-certificates/"
            element={<NotarialServices />}
          />
          <Route
            path="/investment-franchise/"
            element={<InvestmentFranchise />}
          />
          <Route path="/procurement-law/" element={<ProcurementLaw />} />
          <Route path="/our-people/" element={<People />} />
          <Route path="/our-people/anne-wanjiru/" element={<Anne />} />
          <Route path="/our-people/john-wekesa/" element={<John />} />
          <Route path="/our-people/godfrey-orina/" element={<Godffrey />} />
          <Route path="/our-people/andrew-wanga/" element={<Andrew />} />
          <Route path="/our-people/neema-joanne/" element={<Neema />} />
          <Route path="/careers/vacancy/" element={<JobDetail />} />
          <Route path="/job/:id" element={<JobDetail />} />
          <Route path="/articles/" element={<BlogGrid />} />
          <Route path="/article/:id" element={<ArticlesDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
