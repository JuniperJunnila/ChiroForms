import React from "react";
import { Row } from "react-bootstrap";

export default function Home({ appState }) {
  return (
    <div className="page" id="wrapper">
      <div className="body" id="body">
        <div className="body-wrapper" id="body-wrapper">
          <div className="h1-wrap" id="h1-wrap">
            <h1 className="h1" id="h1">
              Flex Tests
            </h1>
          </div>
          <Row>
            <div className="" id="home-p">
              <p key="para1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                porta, orci sit amet tincidunt tempor, enim est luctus justo, ut
                porta justo magna nec turpis. Nunc dapibus, metus ut ullamcorper
                dignissim, lorem tellus auctor turpis, quis semper sem nisi sed
                nulla. Donec mauris magna, dignissim eget consectetur vel,
                mattis sed diam. Praesent enim ex, fringilla at vehicula quis,
                aliquam sed tortor. Integer eu tempor mauris. Donec pharetra sed
                elit sit amet ultricies. Mauris sit amet tortor rutrum,
                elementum urna eget, rutrum diam. Fusce id vulputate nunc.
                Mauris vel massa pharetra, facilisis nulla quis, porttitor
                ligula. Pellentesque habitant morbi tristique senectus et netus
                et malesuada fames ac turpis egestas. Suspendisse vitae felis
                vitae est imperdiet lobortis et eu dui. Cras fringilla diam eget
                consequat ultricies.
              </p>

              <p key="para2">
                Nunc ornare lacus at nibh ornare, sit amet sollicitudin nulla
                lacinia. Vestibulum ante ipsum primis in faucibus orci luctus et
                ultrices posuere cubilia curae; Suspendisse potenti. Donec eu
                cursus est. Aenean mollis id nisi at vulputate. Sed in orci
                dolor. Aliquam vestibulum justo elementum porta feugiat.
                Pellentesque laoreet, enim non gravida venenatis, felis enim
                porta justo, id efficitur velit nulla et diam. Duis vehicula
                augue dignissim hendrerit tristique. Integer purus arcu,
                vestibulum nec convallis quis, vehicula vehicula ligula. Vivamus
                ut pharetra neque, id posuere massa. Curabitur id mollis eros,
                non congue lectus. Praesent metus felis, feugiat nec imperdiet
                at, dictum sed nunc.
              </p>

              <p key="para3">
                Nunc posuere nulla purus, vitae finibus mi ullamcorper sit amet.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Pellentesque quis aliquam magna.
                Phasellus aliquam porttitor ante, et dapibus augue mollis vitae.
                Maecenas ac ultricies erat, sit amet hendrerit sem. Quisque
                laoreet convallis neque ac hendrerit. Nulla mollis sem eget dui
                ultrices, vitae semper neque eleifend. Vivamus faucibus dapibus
                felis vel ullamcorper. Cras nec nulla nisi. Nunc quis mauris
                feugiat augue pulvinar aliquam nec vitae sapien. Etiam quis dui
                odio. Donec facilisis orci nec nibh semper maximus.
              </p>

              <p key="para4">
                Suspendisse potenti. In hac habitasse platea dictumst. Donec
                aliquet viverra tortor id lobortis. Fusce in odio in nibh porta
                maximus. Nullam efficitur risus et tellus sodales pharetra.
                Nulla faucibus, justo eget placerat vestibulum, neque mi
                suscipit felis, sit amet ultricies orci elit a felis. Vivamus
                placerat turpis vitae ipsum hendrerit, ut condimentum mi auctor.
                Suspendisse cursus commodo finibus. Morbi id rutrum dui, a
                congue leo. Vestibulum condimentum faucibus pulvinar. Proin erat
                sem, imperdiet sit amet commodo quis, pellentesque quis augue.
                Duis faucibus nulla ut interdum pretium.
              </p>
            </div>

            <div className="" id="cards-wrap">
              <div className="" id="cards" key="card1">
                <button
                  id="button"
                  className=""
                  to="#"
                  onClick={(e) => {
                    window.location.href = "/";
                    e.preventDefault();
                  }}
                >
                  card 1
                </button>
                <h4 className="" id="round">
                  card 1!
                </h4>
                <p className="" id="round">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam felis mauris, pulvinar eu mi nec, vulputate lobortis
                  nunc. Aliquam lobortis, quam eget viverra pharetra, risus
                  tellus porttitor risus, ut porttitor dolor ligula viverra
                  risus. Donec eu commodo quam. Maecenas eu quam sapien. Vivamus
                  aliquet enim et semper elementum. Morbi ut.
                </p>
              </div>

              <div className="" id="card2" key="card2">
                <button
                  id="button"
                  className=""
                  to="#"
                  onClick={(e) => {
                    window.location.href = "/";
                    e.preventDefault();
                  }}
                >
                  card 2
                </button>
                <h4 className="" id="round">
                  card 2.
                </h4>
                <p className="" id="please-email">
                  Aenean placerat eros nec justo tincidunt porta. Interdum et
                  malesuada fames ac ante ipsum primis in faucibus. Quisque
                  sodales egestas pharetra. Curabitur molestie et felis vitae
                  facilisis. Mauris id porta arcu, nec aliquam lorem.
                  Suspendisse a nibh commodo, placerat risus et, lacinia risus.
                  Donec leo mauris, scelerisque vel vulputate at.
                </p>
              </div>

            </div>
          </Row>
        </div>
      </div>
    </div>
  );
}
