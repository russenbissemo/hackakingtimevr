import React from "react";
import Accueil from "./pages/Accueil";
import FormulaireReservation from "./pages/FormulaireReservationPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/travel" element={<FormulaireReservation />} />
          <Route path="/apropos" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
