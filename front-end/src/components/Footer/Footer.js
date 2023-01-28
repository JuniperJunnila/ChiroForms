import React from "react";
import { Facebook, Yelp, Google, Instagram } from "react-bootstrap-icons";
import { Row, Col } from "react-bootstrap";

//f1
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
    <footer className="f1-wrap" id="f1-wrap">
      <div className="f1-bx" id="f1-bx">
        <section className="f1-bx2" id="f1-bx2">
          <a className="f1-b" id="f1-b" href={facebook}>
            <Facebook color="#3b5998" />
          </a>
          <a className="f1-b" id="f1-b" href={yelp}>
            <Yelp color="#c41200" />
          </a>
          <a className="f1-b" id="f1-b" href={google}>
            <Google color="#dd4b39" />
          </a>
          <a className="f1-b" id="f1-b" href={instagram}>
            <Instagram color="#ac2bac" />
          </a>
        </section>

        {/* Section: Text */}
        <section className="f1-bx2" id="f1-bx2">
          <div className="f1-bx3" id="f1-bx3">
            <Row>{renderedCredits}</Row>
            <Row>
              <Col>
                <h6>Loacted at</h6>
                <a className="f1-txt" id="f1-txt" href={locale}>
                  <p>{localeContents}</p>
                </a>
              </Col>
              <Col>
                <h6>Email us at</h6>
                <a className="f1-txt" id="f1-txt" href={email}>
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
