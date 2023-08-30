import React from "react";
import "../../css/creditcards.css";

function CreditCards({ savedItems }) {
  return (
    <section className="credit-cards" aria-labelledby="Credit card list">
      <h2>Credit Cards</h2>
      <ul className="credit-card-list">
        {savedItems.map((item, index) => (
          <li key={index} className="credit-card-item">
            <span className="card-number">
              Credit Card No: {item.cardNumber}
            </span>
            <span className="card-country">Country: {item.country}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CreditCards;
