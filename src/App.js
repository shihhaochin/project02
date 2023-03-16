import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NaviComponent from "./components/navi-component";
import Homepage from "./pages/homepage";
import DesignerPage from "./pages/designerPage";
import AboutusPage from "./pages/aboutusPage";
import ServicesPage from "./pages/servicesPage";
import ReservePage from "./pages/reservePage";
import MemberPage from "./pages/memberPage";
import "./styles/style.css";

function App() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  let [homepageChange, setHomepageChange] = useState(true);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  let [designerChange, setDesignerChange] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  let [servicesChange, setServicesChange] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  let [aboutusChange, setAboutusChange] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  let [reserveChange, setReserveChange] = useState(false);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  let [memberChange, setMemberChange] = useState(false);

  return (
    <div className="App relative">
      <NaviComponent
        homepageChange={homepageChange}
        designerChange={designerChange}
        servicesChange={servicesChange}
        aboutusChange={aboutusChange}
        reserveChange={reserveChange}
        memberChange={memberChange}
      />

      <Routes>
        <Route
          path="/"
          element={
            <Homepage
              setHomepageChange={setHomepageChange}
              setDesignerChange={setDesignerChange}
              setServicesChange={setServicesChange}
              setAboutusChange={setAboutusChange}
              setReserveChange={setReserveChange}
              setMemberChange={setMemberChange}
            />
          }
        />
        <Route
          path="/designer"
          element={
            <DesignerPage
              setHomepageChange={setHomepageChange}
              setDesignerChange={setDesignerChange}
              setServicesChange={setServicesChange}
              setAboutusChange={setAboutusChange}
              setReserveChange={setReserveChange}
              setMemberChange={setMemberChange}
            />
          }
        />
        <Route
          path="/aboutus"
          element={
            <AboutusPage
              setHomepageChange={setHomepageChange}
              setDesignerChange={setDesignerChange}
              setServicesChange={setServicesChange}
              setAboutusChange={setAboutusChange}
              setReserveChange={setReserveChange}
              setMemberChange={setMemberChange}
            />
          }
        />
        <Route
          path="/services"
          element={
            <ServicesPage
              setHomepageChange={setHomepageChange}
              setDesignerChange={setDesignerChange}
              setServicesChange={setServicesChange}
              setAboutusChange={setAboutusChange}
              setReserveChange={setReserveChange}
              setMemberChange={setMemberChange}
            />
          }
        />
        <Route
          path="/reserve"
          element={
            <ReservePage
              setHomepageChange={setHomepageChange}
              setDesignerChange={setDesignerChange}
              setServicesChange={setServicesChange}
              setAboutusChange={setAboutusChange}
              setReserveChange={setReserveChange}
              setMemberChange={setMemberChange}
            />
          }
        />
        <Route
          path="/membership"
          element={
            <MemberPage
              setHomepageChange={setHomepageChange}
              setDesignerChange={setDesignerChange}
              setServicesChange={setServicesChange}
              setAboutusChange={setAboutusChange}
              setReserveChange={setReserveChange}
              setMemberChange={setMemberChange}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
