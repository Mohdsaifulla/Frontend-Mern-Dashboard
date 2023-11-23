import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Energy from "./components/Energy";
import Navbar from "./components/Navbar";
import SideNab from "./components/SideNab";
import Environment from "./components/Manufacturing";
import Government from "./components/Government";
import Aerospace from "./components/Aerospace";
import Manufacturing from "./components/Manufacturing";
import Retail from "./components/Retail";
import Financial from "./components/Financial";
import Support from "./components/Support";
import IT from "./components/IT";
import Healthcare from "./components/Healthcare";
import Agriculture from "./components/Agriculture";
import Automotive from "./components/Automotive";
import Tourism from "./components/Tourism";
import Construction from "./components/Construction";
import Security from "./components/Security";
import Transport from "./components/Transport";
import Water from "./components/Water";
import Entertainment from "./components/Entertainment";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <SideNab />
        <Routes>
          <Route exact path="/" element={<Energy />} />
          <Route exact path="/home" element={<Energy />} />
          <Route path="/manufacturing" element={<Manufacturing />} />
         
          <Route path="/aerospace" element={<Aerospace />} />
          <Route path="/manufacturing" element={<Manufacturing />} />
          <Route path="/retail" element={<Retail />} />
          <Route path="/financial" element={<Financial />} />
          <Route path="/support" element={<Support />} />
          <Route path="/it" element={<IT />} />
          <Route path="/Healthcare" element={<Healthcare />} />
          <Route path="/Agriculture" element={<Agriculture />} />
          <Route path="/automotive" element={<Automotive />} />
          <Route path="/Tourism" element={<Tourism />} />
          <Route path="/Construction" element={<Construction />} />
          <Route path="/security" element={<Security />} />
          <Route path="/transport" element={<Transport />} />
          <Route path="/water" element={<Water />} />
          <Route path="/entertainment" element={<Entertainment />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
};

export default App;
