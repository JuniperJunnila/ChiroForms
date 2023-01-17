import React from "react";
import { Facebook, Yelp, Google, Instagram } from "react-bootstrap-icons";
import { Row, Col } from "react-bootstrap";


export default function Footer({ appState }) {
  const { footerState } = appState;
  const { links } = footerState;
  const { contents } = footerState;
  const { facebook, yelp, google, instagram, locale, email } = links;
  const { credits, localeContents, emailContents } = contents;
  let renderedCredits = [];
  const renderCredits = () => {
    let count = 0;
    credits.forEach((credit) => {
      count++;
      renderedCredits.push(
        <Col key={`Credit ${count}`}>
          <h6 key={`credit title ${count}`}>{credit[0]}</h6>
          <p key={`credited member ${count}`}>{credit[1]}</p>
        </Col>
      );
    });
    return renderedCredits;
  };
  renderCredits(credits);

  return (
    <footer className="footer" id="footer">
      <div className="container" id="container">
        <section className="section" id="section">
          <a className="footer-button" id="footer-button" href={facebook}>
            <Facebook color="#3b5998" />
          </a>
          <a className="footer-button" id="footer-button" href={yelp}>
            <Yelp color="#c41200" />
          </a>
          <a className="footer-button" id="footer-button" href={google}>
            <Google color="#dd4b39" />
          </a>
          <a className="footer-button" id="footer-button" href={instagram}>
            <Instagram color="#ac2bac" />
          </a>
        </section>

        {/* Section: Text */}
        <section className="section" id="section">
          <div className="info" id="info">
            <Row>{renderedCredits}</Row>
            <Row>
              <Col>
                <h6>Loacted at</h6>
                <a className="link-light" id="link-light" href={locale}>
                  <p>{localeContents}</p>
                </a>
              </Col>
              <Col>
                <h6>Email us at</h6>
                <a className="link-light" id="link-light" href={email}>
                  <p>{emailContents}</p>
                </a>
              </Col>
            </Row>
          </div>
        </section>
        {/* Section: Text */}
      </div>
      {/* Grid container */}
    </footer>
  );
}
