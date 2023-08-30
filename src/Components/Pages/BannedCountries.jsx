import React, { useState } from "react";
import "../../css/bannedcountries.css";
import { usePredefinedCountries } from "../PredefinedCountriesContext";

function BannedCountries({ bannedCountries, setBannedCountries }) {
  const predefinedCountries = usePredefinedCountries();
  const [selectedCountry, setSelectedCountry] = useState("");

  const addCountry = () => {
    if (selectedCountry && !bannedCountries.includes(selectedCountry)) {
      setBannedCountries([...bannedCountries, selectedCountry]);
      setSelectedCountry("");
    }
  };

  const removeCountry = (countryToRemove) => {
    const updatedCountries = bannedCountries.filter(
      (c) => c !== countryToRemove
    );
    setBannedCountries(updatedCountries);
  };

  return (
    <section className="banned-countries" aria-labelledby="Banned Countries">
      <h2>Banned Countries</h2>
      <div className="banned-countries-input">
        <select
          value={selectedCountry}
          onChange={(event) => setSelectedCountry(event.target.value)}
        >
          <option value="">Select a country</option>
          {predefinedCountries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
        <button onClick={addCountry}>Add Country</button>
      </div>
      <ul className="banned-countries-list">
        {bannedCountries.map((c) => (
          <li key={c} className="banned-country-item">
            {c}{" "}
            <button onClick={() => removeCountry(c)} className="remove-button">
              Remove
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default BannedCountries;
