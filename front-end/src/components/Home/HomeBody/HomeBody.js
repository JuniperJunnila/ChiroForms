import React from "react";
import { Row } from "react-bootstrap";

export default function HomeBody({ appState }) {
  const { adminView } = appState.navState;
  const { homeState } = appState;
  const { body } = homeState;
  const { cards = [], editButtons } = body;
  let currentCards = [];

  const renderCards = () => {
    for (let i = 1; i <= editButtons.length; i++) {
      const currentCard = cards[i - 1];
      currentCards.push(
        <div key={`card ${i}`}>
          {adminView ? editButtons[i] : null}
          {currentCard}
        </div>
      );
    }
  };

  renderCards();

  return (
    <div className="body-wrapper" id="body-wrapper">
      <div className="h1-wrap" id="h1-wrap">
        <h1 className="h1" id="h1">
          Welcome
        </h1>
      </div>
      <Row>
        <div className="home-p" id="home-p">
          {adminView ? editButtons[0] : null}
          {body.para}
        </div>
        <div className="cards-wrap" id="cards-wrap">
          {currentCards}
        </div>
      </Row>
    </div>
  );
}
