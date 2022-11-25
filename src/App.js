import React from "react";
import Accueil from './pages/Accueil';
import FormulaireReservation from "./pages/FormulaireReservationPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/travel" element={<FormulaireReservation />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
