import React, { useState } from "react";
import "../../css/capturecreditcards.css";
import { usePredefinedCountries } from "../PredefinedCountriesContext";

function CaptureCreditCards({ bannedCountries, savedItems, setSavedItems }) {
  const predefinedCountries = usePredefinedCountries();

  const [creditcardNumber, setCreditCardNumber] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");

  const [showError, setShowError] = useState(false);
  const [cardNumberError, setCardNumberError] = useState(false);
  const [missingFieldsError, setMissingFieldsError] = useState(false);
  const [duplicateCardError, setDuplicateCardError] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleCountryChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedCountry(selectedValue);

    if (bannedCountries.includes(selectedValue)) {
      setShowError(true);
    } else {
      setShowError(false);
    }
  };

  const handleCreditCardAdd = (event) => {
    const input = event.target.value;
    setCreditCardNumber(input);

    const digitPattern = /^[0-9]*$/;
    const isValidInput = digitPattern.test(input);

    if (!isValidInput || !validateCreditCard(input)) {
      setCardNumberError(true);
    } else {
      setCardNumberError(false);
    }
  };

  const validateCreditCard = (cardNumber) => {
    let sum = 0;
    let doubleUp = false;

    for (let i = cardNumber.length - 1; i >= 0; i--) {
      let digit = parseInt(cardNumber.charAt(i), 10);

      if (doubleUp) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }

      sum += digit;
      doubleUp = !doubleUp;
    }

    return sum % 10 === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!showError && creditcardNumber && selectedCountry && !cardNumberError) {
      const isDuplicate = savedItems.some(
        (item) => item.cardNumber === creditcardNumber
      );

      if (isDuplicate) {
        setDuplicateCardError(true);
      } else {
        setSavedItems([
          ...savedItems,
          { cardNumber: creditcardNumber, country: selectedCountry },
        ]);
        setCreditCardNumber("");
        setSelectedCountry("");
        setMissingFieldsError(false);
        setDuplicateCardError(false);
        setSuccessMessage("Credit card added successfully!");

        setTimeout(() => {
          setSuccessMessage("");
        }, 3000);
      }
    } else {
      setMissingFieldsError(true);
    }
  };

  return (
    <section className="capture-credit-cards">
      <h2>Capture Credit Cards</h2>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>Credit Card No.</label>
          <input
            type="text"
            value={creditcardNumber}
            onChange={handleCreditCardAdd}
            placeholder="Enter credit card number"
          />
          {cardNumberError && (
            <p className="error-message">
              Please enter a valid credit card number
            </p>
          )}
          {duplicateCardError && (
            <p className="error-message">This card number already exists.</p>
          )}
          <label>Credit Card Country</label>
          <select value={selectedCountry} onChange={handleCountryChange}>
            <option value="">Select a country</option>
            {predefinedCountries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
          {showError && <p className="error-message">Country is banned.</p>}
          {missingFieldsError && (
            <p className="error-message">
              Please fill in all required fields before submitting.
            </p>
          )}
          {successMessage && (
            <p className="success-message">{successMessage}</p>
          )}
        </fieldset>
        <fieldset>
          <button type="submit">Add credit card</button>
        </fieldset>
      </form>
    </section>
  );
}

export default CaptureCreditCards;
