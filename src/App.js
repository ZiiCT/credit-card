import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import BannedCountries from "./Components/Pages/BannedCountries";
import CaptureCreditCards from "./Components/Pages/CaptureCreditCard";
import CreditCards from "./Components/Pages/CreditCards";
import Home from "./Components/Pages/Home";
import { useState } from "react";

function App() {
  const [bannedCountries, setBannedCountries] = useState([]);
  const [savedItems, setSavedItems] = useState([]);
  return (
    <section className="App" aria-labelledby="Credit card information">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/bannedcountries"
          element={
            <BannedCountries
              bannedCountries={bannedCountries}
              setBannedCountries={setBannedCountries}
            />
          }
        />
        <Route
          path="/capturecreditcard"
          element={
            <CaptureCreditCards
              bannedCountries={bannedCountries}
              savedItems={savedItems}
              setSavedItems={setSavedItems}
            />
          }
        />
        <Route
          path="/creditcards"
          element={<CreditCards savedItems={savedItems} />}
        />
      </Routes>
    </section>
  );
}

export default App;
