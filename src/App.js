import React from "react";
import { Routes, Route } from "react-router-dom";
import NaviComponent from "./components/navi-component";
import Homepage from "./pages/homepage";
import DesignerPage from "./pages/designerPage";
import BoyhairPage from "./pages/boyhairPage";
import SalonaddressPage from "./pages/salonaddressPage";
import ReservePage from "./pages/reservePage";
import MemberPage from "./pages/memberPage";
import "./styles/style.css";

function App() {
  return (
    <div className="App relative">
      <NaviComponent />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/designer" element={<DesignerPage />} />
        <Route path="/hairStyle" element={<BoyhairPage />} />
        <Route path="/address" element={<SalonaddressPage />} />
        <Route path="/reserve" element={<ReservePage />} />
        <Route path="/membership" element={<MemberPage />} />
      </Routes>
    </div>
  );
}

export default App;
