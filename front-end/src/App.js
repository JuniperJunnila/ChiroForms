import React, { useEffect, useState } from "react";
import AllRoutes from "./utils/Routes/Routes.js";

export default function App() {
  // const UPLOAD_STATES = {
  //   NONE: 0,
  //   UPLOADING: 1,
  //   FINISHED: 2,
  // };

  const [editTarget, setEditTarget] = useState("");
  const [appState, setAppState] = useState(false);

  useEffect(() => {
    const toggleToggle = (event) => {
      const { id } = event.target;
      if (editTarget !== id) {
        setEditTarget(id);
      }
    };

    setAppState({
      navState: { adminView: false },
      footerState: {
        links: {
          yelp: "https://www.yelp.com/biz/lifestyle-health-and-fitness-center-oakley",
          locale:
            "https://www.google.com/maps?ll=38.003741,-121.751015&z=14&t=m&hl=en-US&gl=US&mapclient=embed&cid=6299585167640625869",
          email: "https://www.oakleychiropractor.com/contact-us/",
        },
        contents: {
          credits: [
            ["Team Member 1", "Dr. Rick Junnila"],
            ["Team Member 2", "Dr Brenda Ramos"],
          ],
          localeContents: `Lifestyle Chiropractic & Fitness Center
          5351 Neroly Rd, Ste B
          Oakley, CA 94561`,
          emailContents: "https://www.oakleychiropractor.com/contact-us/",
        },
      },
      homeState: {
        body: {
          para: [
            <p key="para1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              porta, orci sit amet tincidunt tempor, enim est luctus justo, ut
              porta justo magna nec turpis. Nunc dapibus, metus ut ullamcorper
              dignissim, lorem tellus auctor turpis, quis semper sem nisi sed
              nulla. Donec mauris magna, dignissim eget consectetur vel, mattis
              sed diam. Praesent enim ex, fringilla at vehicula quis, aliquam
              sed tortor. Integer eu tempor mauris. Donec pharetra sed elit sit
              amet ultricies. Mauris sit amet tortor rutrum, elementum urna
              eget, rutrum diam. Fusce id vulputate nunc. Mauris vel massa
              pharetra, facilisis nulla quis, porttitor ligula. Pellentesque
              habitant morbi tristique senectus et netus et malesuada fames ac
              turpis egestas. Suspendisse vitae felis vitae est imperdiet
              lobortis et eu dui. Cras fringilla diam eget consequat ultricies.
            </p>,
            <p key="para2">
              Nunc ornare lacus at nibh ornare, sit amet sollicitudin nulla
              lacinia. Vestibulum ante ipsum primis in faucibus orci luctus et
              ultrices posuere cubilia curae; Suspendisse potenti. Donec eu
              cursus est. Aenean mollis id nisi at vulputate. Sed in orci dolor.
              Aliquam vestibulum justo elementum porta feugiat. Pellentesque
              laoreet, enim non gravida venenatis, felis enim porta justo, id
              efficitur velit nulla et diam. Duis vehicula augue dignissim
              hendrerit tristique. Integer purus arcu, vestibulum nec convallis
              quis, vehicula vehicula ligula. Vivamus ut pharetra neque, id
              posuere massa. Curabitur id mollis eros, non congue lectus.
              Praesent metus felis, feugiat nec imperdiet at, dictum sed nunc.
            </p>,
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
            </p>,
            <p key="para4">
              Suspendisse potenti. In hac habitasse platea dictumst. Donec
              aliquet viverra tortor id lobortis. Fusce in odio in nibh porta
              maximus. Nullam efficitur risus et tellus sodales pharetra. Nulla
              faucibus, justo eget placerat vestibulum, neque mi suscipit felis,
              sit amet ultricies orci elit a felis. Vivamus placerat turpis
              vitae ipsum hendrerit, ut condimentum mi auctor. Suspendisse
              cursus commodo finibus. Morbi id rutrum dui, a congue leo.
              Vestibulum condimentum faucibus pulvinar. Proin erat sem,
              imperdiet sit amet commodo quis, pellentesque quis augue. Duis
              faucibus nulla ut interdum pretium.
            </p>,
          ],
          cards: [
            <div className="cards" id="cards" key="card1">
              <button
                id="button"
                className="button"
                to="#"
                onClick={(e) => {
                  window.location.href = "/";
                  e.preventDefault();
                }}
              >
                card 1
              </button>
              <h4 className="base-bx" id="base-bx">
                card 1!
              </h4>
              <p className="base-bx" id="base-bx">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                felis mauris, pulvinar eu mi nec, vulputate lobortis nunc.
                Aliquam lobortis, quam eget viverra pharetra, risus tellus
                porttitor risus, ut porttitor dolor ligula viverra risus. Donec
                eu commodo quam. Maecenas eu quam sapien. Vivamus aliquet enim
                et semper elementum. Morbi ut.
              </p>
            </div>,
            <div className="cards" id="card2" key="card2">
              <button
                id="button"
                className="button"
                to="#"
                onClick={(e) => {
                  window.location.href = "/";
                  e.preventDefault();
                }}
              >
                card 2
              </button>
              <h4 className="base-bx" id="base-bx">
                card 2.
              </h4>
              <p className="please-email" id="please-email">
                Aenean placerat eros nec justo tincidunt porta. Interdum et
                malesuada fames ac ante ipsum primis in faucibus. Quisque
                sodales egestas pharetra. Curabitur molestie et felis vitae
                facilisis. Mauris id porta arcu, nec aliquam lorem. Suspendisse
                a nibh commodo, placerat risus et, lacinia risus. Donec leo
                mauris, scelerisque vel vulputate at.
              </p>
            </div>,
          ],
          editButtons: [
            <button
              className="edit-button"
              type="button"
              key="edit-paragraphs"
              id="edit-button"
              onClick={toggleToggle}
            >
              Edit Body Text
            </button>,
            <button
              className="edit-button"
              type="button"
              key="edit-card1"
              id="edit-button"
              onClick={toggleToggle}
            >
              Edit card1 Text
            </button>,
            <button
              className="edit-button"
              type="button"
              key="edit-card2"
              id="edit-button"
              onClick={toggleToggle}
            >
              Edit card2 Text
            </button>,
          ],
        },
      },
    });
  }, [editTarget]);

  if (!appState) {
    return <div />;
  }

  const navButtonsOnOff = (event) => {
    event.target.id === "true"
      ? setAppState({ ...appState, navState: { adminView: true } })
      : setAppState({ ...appState, navState: { adminView: false } });
  };

  const editImageUploaderState = (event) => {
    switch (event.target.id) {
      case "uploadState":
        console.log(event.target.id);
        setAppState({
          ...appState,
          imageUploaderState: { uploadState: event.target.id },
        });
        break;
      case "crop":
        setAppState({
          ...appState,
          imageUploaderState: { uploadState: event.target.id },
        });
        break;
      case "croppedUrl":
        setAppState({
          ...appState,
          imageUploaderState: { uploadState: event.target.id },
        });
        break;
      default:
        break;
    }
  };

  const editBody = (event) => {
    setAppState({
      ...appState,
      homeState: { body: { cards: [event.target.value] } },
    });
  };

  return (
    <AllRoutes
      appState={appState}
      editBody={editBody}
      navButtonsOnOff={navButtonsOnOff}
      editImageUploaderState={editImageUploaderState}
    />
  );
}
