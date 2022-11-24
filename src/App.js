/* eslint-disable no-unused-vars */
import './App.css';
import Accueil from "./Accueil";
import Period from './components/Period'
import FormulaireReservationPage from "./pages/FormulaireReservationPage"

function App() {
  return (
    <div className="App">
      <Accueil />
      <Period />
      <FormulaireReservationPage />
    </div>
  );
}

export default App;
