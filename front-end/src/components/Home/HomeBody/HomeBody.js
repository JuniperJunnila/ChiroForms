import React, { useState } from "react";
import { Row } from "react-bootstrap";

export default function HomeBody({ appState }) {
  const emptyState = {
    group1: {
      header: "basic-info",
      q01: {
        placeholder: "Patient's Name",
        input: "",
        description: "",
        id: "",
      },
      q02: {
        placeholder: "",
        input: "",
        description: "Today's Date",
        id: "",
      },
      q03: {
        placeholder: "",
        input: "",
        description: "Date of Accident",
        id: "",
      },
      q04: {
        placeholder: "",
        input: "",
        description:
          "Did this accident occur during the course of your employment or in a company vehicle?",
        id: "",
      },
    },

    group2: {
      header: "loaction-of-accident",
      q01: {
        placeholder: "",
        input: "",
        description: "",
        id: "",
      },
      q02: {
        placeholder: "",
        input: "",
        description: "",
        id: "",
      },
      q03: {
        placeholder: "",
        input: "",
        description: "",
        id: "",
      },
      q04: {
        placeholder: "",
        input: "",
        description: "",
        id: "",
      },
      q05: {
        placeholder: "",
        input: "",
        description: "",
        id: "",
      },
      q06: {
        placeholder: "",
        input: "",
        description: "",
        id: "",
      },
      q07: {
        placeholder: "",
        input: "",
        description: "",
        id: "",
      },
    },

    group3: {
      header: "vehicles-involved",
      q01: {
        placeholder: "",
        input: "",
        description: "",
        id: "",
      },
      q02: {
        placeholder: "",
        input: "",
        description: "",
        id: "",
      },
    },

    group4: {
      header: "your-location-inside-the-vehicla",
      q01: {
        placeholder: "",
        input: "",
        description: "",
        id: "",
      },
      q02: {
        placeholder: "",
        input: "",
        description: "",
        id: "",
      },
      q03: {
        placeholder: "",
        input: "",
        description: "",
        id: "",
      },
      q04: {
        placeholder: "",
        input: "",
        description: "",
        id: "",
      },
      q05: {
        placeholder: "",
        input: "",
        description: "",
        id: "",
      },
      q06: {
        placeholder: "",
        input: "",
        description: "",
        id: "",
      },
      q07: {
        placeholder: "",
        input: "",
        description: "",
        id: "",
      },
      q08: {
        placeholder: "",
        input: "",
        description: "",
        id: "",
      },
      q09: {
        placeholder: "",
        input: "",
        description: "",
        id: "",
      },
      q10: {
        placeholder: "",
        input: "",
        description: "",
        id: "",
      },
    },

    group5: {
      header: "at-the-time-of-impact",
      q01: {
        placeholder: "",
        input: "",
        description: "",
        id: "",
      },
      q02: {
        placeholder: "",
        input: "",
        description: "",
        id: "",
      },
      q03: {
        placeholder: "",
        input: "",
        description: "",
        id: "",
      },
      q04: {
        placeholder: "",
        input: "",
        description: "",
        id: "",
      },
      q05: {
        placeholder: "",
        input: "",
        description: "",
        id: "",
      },
      q06: {
        placeholder: "",
        input: "",
        description: "",
        id: "",
      },
      q07: {
        placeholder: "",
        input: "",
        description: "",
        id: "",
      },
      q08: {
        placeholder: "",
        input: "",
        description: "",
        id: "",
      },
      q09: {
        placeholder: "",
        input: "",
        description: "",
        id: "",
      },
      q10: {
        placeholder: "",
        input: "",
        description: "",
        id: "",
      },
      q11: {
        placeholder: "",
        input: "",
        description: "",
        id: "",
      },
      q12: {
        placeholder: "",
        input: "",
        description: "",
        id: "",
      },
      q13: {
        placeholder: "",
        input: "",
        description: "",
        id: "",
      },
      q14: {
        placeholder: "",
        input: "",
        description: "",
        id: "",
      },
      q15: {
        placeholder: "",
        input: "",
        description: "",
        id: "",
      },
      q16: {
        placeholder: "",
        input: "",
        description: "",
        id: "",
      },
      q17: {
        placeholder: "",
        input: "",
        description: "",
        id: "",
      },
      q18: {
        placeholder: "",
        input: "",
        description: "",
        id: "",
      },
      q19: {
        placeholder: "",
        input: "",
        description: "",
        id: "",
      },
      q20: {
        placeholder: "",
        input: "",
        description: "",
        id: "",
      },
      q21: {
        placeholder: "",
        input: "",
        description: "",
        id: "",
      },
      q22: {
        placeholder: "",
        input: "",
        description: "",
        id: "",
      },
      q23: {
        placeholder: "",
        input: "",
        description: "",
        id: "",
      },
      q24: {
        placeholder: "",
        input: "",
        description: "",
        id: "",
      },
      q25: {
        placeholder: "",
        input: "",
        description: "",
        id: "",
      },
      q26: {
        placeholder: "",
        input: "",
        description: "",
        id: "",
      },
      q27: {
        placeholder: "",
        input: "",
        description: "",
        id: "",
      },
      q28: {
        placeholder: "",
        input: "",
        description: "",
        id: "",
      },
    },

    group6: {
      header: "immediately-following-the-accident",
      q01: {
        placeholder: "",
        input: "",
        description: "",
        id: "",
      },
      q02: {
        placeholder: "",
        input: "",
        description: "",
        id: "",
      },
      q03: {
        placeholder: "",
        input: "",
        description: "",
        id: "",
      },
      q04: {
        placeholder: "",
        input: "",
        description: "",
        id: "",
      },
      q05: {
        placeholder: "",
        input: "",
        description: "",
        id: "",
      },
      q06: {
        placeholder: "",
        input: "",
        description: "",
        id: "",
      },
      q07: {
        placeholder: "",
        input: "",
        description: "",
        id: "",
      },
    },

    group7: {
      header: "your-work",
      q01: {
        placeholder: "",
        input: "",
        description: "",
        id: "",
      },
      q02: {
        placeholder: "",
        input: "",
        description: "",
        id: "",
      },
      q03: {
        placeholder: "",
        input: "",
        description: "",
        id: "",
      },
      q04: {
        placeholder: "",
        input: "",
        description: "",
        id: "",
      },
      q05: {
        placeholder: "",
        input: "",
        description: "",
        id: "",
      },
      q06: {
        placeholder: "",
        input: "",
        description: "",
        id: "",
      },
      q07: {
        placeholder: "",
        input: "",
        description: "",
        id: "",
      },
    },

    group8: {
      header: "before-and-after-the-accident",
      q01: {
        placeholder: "",
        input: "",
        description: "",
        id: "",
      },
      q02: {
        placeholder: "",
        input: "",
        description: "",
        id: "",
      },
      q03: {
        placeholder: "",
        input: "",
        description: "",
        id: "",
      },
      q04: {
        placeholder: "",
        input: "",
        description: "",
        id: "",
      },
      q05: {
        placeholder: "",
        input: "",
        description: "",
        id: "",
      },
      q06: {
        placeholder: "",
        input: "",
        description: "",
        id: "",
      },
      q07: {
        placeholder: "",
        input: "",
        description: "",
        id: "",
      },
      q08: {
        placeholder: "",
        input: "",
        description: "",
        id: "",
      },
      q09: {
        placeholder: "",
        input: "",
        description: "",
        id: "",
      },
      q10: {
        placeholder: "",
        input: "",
        description: "",
        id: "",
      },
      q11: {
        placeholder: "",
        input: "",
        description: "",
        id: "",
      },
      q12: {
        placeholder: "",
        input: "",
        description: "",
        id: "",
      },
      q13: {
        placeholder: "",
        input: "",
        description: "",
        id: "",
      },
      q14: {
        placeholder: "",
        input: "",
        description: "",
        id: "",
      },
      q15: {
        placeholder: "",
        input: "",
        description: "",
        id: "",
      },
      q16: {
        placeholder: "",
        input: "",
        description: "",
        id: "",
      },
      q17: {
        placeholder: "",
        input: "",
        description: "",
        id: "",
      },
      q18: {
        placeholder: "",
        input: "",
        description: "",
        id: "",
      },
      q19: {
        placeholder: "",
        input: "",
        description: "",
        id: "",
      },
      q20: {
        placeholder: "",
        input: "",
        description: "",
        id: "",
      },
      q21: {
        placeholder: "",
        input: "",
        description: "",
        id: "",
      },
      q22: {
        placeholder: "",
        input: "",
        description: "",
        id: "",
      },
      q23: {
        placeholder: "",
        input: "",
        description: "",
        id: "",
      },
      q24: {
        placeholder: "",
        input: "",
        description: "",
        id: "",
      },
      q25: {
        placeholder: "",
        input: "",
        description: "",
        id: "",
      },
      q26: {
        placeholder: "",
        input: "",
        description: "",
        id: "",
      },
      q27: {
        placeholder: "",
        input: "",
        description: "",
        id: "",
      },
      q28: {
        placeholder: "",
        input: "",
        description: "",
        id: "",
      },
      q29: {
        placeholder: "",
        input: "",
        description: "",
        id: "",
      },
      q30: {
        placeholder: "",
        input: "",
        description: "",
        id: "",
      },
      q31: {
        placeholder: "",
        input: "",
        description: "",
        id: "",
      },
    },

    group9: {
      header: "signatures",
      patient01: {
        name: {
          placeholder: "",
          input: "",
          description: "",
          id: "",
        },
        date: {
          placeholder: "",
          input: "",
          description: "",
          id: "",
        },
        signature: {
          placeholder: "",
          input: "",
          description: "",
          id: "",
        },
      },
      patient02: {
        name: {
          placeholder: "",
          input: "",
          description: "",
          id: "",
        },
        date: {
          placeholder: "",
          input: "",
          description: "",
          id: "",
        },
        signature: {
          placeholder: "",
          input: "",
          description: "",
          id: "",
        },
      },
      attorney: {
        name: {
          placeholder: "",
          input: "",
          description: "",
          id: "",
        },
        date: {
          placeholder: "",
          input: "",
          description: "",
          id: "",
        },
        signature: {
          placeholder: "",
          input: "",
          description: "",
          id: "",
        },
      },
    },
  };
  const [formState, setFormState] = useState(emptyState);

  return (
    <div className="body-wrapper" id="body-wrapper">
      <div className="h1-wrap" id="h1-wrap">
        <h1 className="h1" id="h1">
          Patient Intake
        </h1>
      </div>

      <Row className="group" id="group1">
        <form className="form">
          <div className="item">
            <input
              className="control"
              id="formItemX"
              placeholder="Form Item X"
            />
            <div className="text">Extra description if necessary.</div>
          </div>
          <div className="item">
            <input
              className="control"
              id="formItemY"
              placeholder="Form Item Y"
            />

            <div className="text">Extra description if necessary.</div>
          </div>
          <div className="item">
            <input
              className="control"
              id="formItemZ"
              placeholder="Form Item Z"
            />
            <div className="text">Extra description if necessary.</div>
          </div>
        </form>
      </Row>

      <Row className="group" id="group2">
        <form className="form">
          <div className="item">
            <input
              className="control"
              id="formItemX"
              placeholder="Form Item X"
            />
            <div className="text">Extra description if necessary.</div>
          </div>
          <div className="item">
            <input
              className="control"
              id="formItemY"
              placeholder="Form Item Y"
            />

            <div className="text">Extra description if necessary.</div>
          </div>
          <div className="item">
            <input
              className="control"
              id="formItemZ"
              placeholder="Form Item Z"
            />
            <div className="text">Extra description if necessary.</div>
          </div>
        </form>
      </Row>

      <Row className="group" id="group3">
        <form className="form">
          <div className="item">
            <input
              className="control"
              id="formItemX"
              placeholder="Form Item X"
            />
            <div className="text">Extra description if necessary.</div>
          </div>
          <div className="item">
            <input
              className="control"
              id="formItemY"
              placeholder="Form Item Y"
            />

            <div className="text">Extra description if necessary.</div>
          </div>
          <div className="item">
            <input
              className="control"
              id="formItemZ"
              placeholder="Form Item Z"
            />
            <div className="text">Extra description if necessary.</div>
          </div>
        </form>
      </Row>

      <Row className="group" id="group4">
        <form className="form">
          <div className="item">
            <input
              className="control"
              id="formItemX"
              placeholder="Form Item X"
            />
            <div className="text">Extra description if necessary.</div>
          </div>
          <div className="item">
            <input
              className="control"
              id="formItemY"
              placeholder="Form Item Y"
            />

            <div className="text">Extra description if necessary.</div>
          </div>
          <div className="item">
            <input
              className="control"
              id="formItemZ"
              placeholder="Form Item Z"
            />
            <div className="text">Extra description if necessary.</div>
          </div>
        </form>
      </Row>

      <Row className="group" id="group5">
        <form className="form">
          <div className="item">
            <input
              className="control"
              id="formItemX"
              placeholder="Form Item X"
            />
            <div className="text">Extra description if necessary.</div>
          </div>
          <div className="item">
            <input
              className="control"
              id="formItemY"
              placeholder="Form Item Y"
            />

            <div className="text">Extra description if necessary.</div>
          </div>
          <div className="item">
            <input
              className="control"
              id="formItemZ"
              placeholder="Form Item Z"
            />
            <div className="text">Extra description if necessary.</div>
          </div>
        </form>
      </Row>

      <Row className="group" id="group6">
        <form className="form">
          <div className="item">
            <input
              className="control"
              id="formItemX"
              placeholder="Form Item X"
            />
            <div className="text">Extra description if necessary.</div>
          </div>
          <div className="item">
            <input
              className="control"
              id="formItemY"
              placeholder="Form Item Y"
            />

            <div className="text">Extra description if necessary.</div>
          </div>
          <div className="item">
            <input
              className="control"
              id="formItemZ"
              placeholder="Form Item Z"
            />
            <div className="text">Extra description if necessary.</div>
          </div>
        </form>
      </Row>

      <Row className="group" id="group7">
        <form className="form">
          <div className="item">
            <input
              className="control"
              id="formItemX"
              placeholder="Form Item X"
            />
            <div className="text">Extra description if necessary.</div>
          </div>
          <div className="item">
            <input
              className="control"
              id="formItemY"
              placeholder="Form Item Y"
            />

            <div className="text">Extra description if necessary.</div>
          </div>
          <div className="item">
            <input
              className="control"
              id="formItemZ"
              placeholder="Form Item Z"
            />
            <div className="text">Extra description if necessary.</div>
          </div>
        </form>
      </Row>

      <Row className="group" id="group8">
        <form className="form">
          <div className="item">
            <input
              className="control"
              id="formItemX"
              placeholder="Form Item X"
            />
            <div className="text">Extra description if necessary.</div>
          </div>
          <div className="item">
            <input
              className="control"
              id="formItemY"
              placeholder="Form Item Y"
            />

            <div className="text">Extra description if necessary.</div>
          </div>
          <div className="item">
            <input
              className="control"
              id="formItemZ"
              placeholder="Form Item Z"
            />
            <div className="text">Extra description if necessary.</div>
          </div>
        </form>
      </Row>

      <Row className="group" id="group9">
        <form className="form">
          <div className="item">
            <input
              className="control"
              id="formItemX"
              placeholder="Form Item X"
            />
            <div className="text">Extra description if necessary.</div>
          </div>
          <div className="item">
            <input
              className="control"
              id="formItemY"
              placeholder="Form Item Y"
            />

            <div className="text">Extra description if necessary.</div>
          </div>
          <div className="item">
            <input
              className="control"
              id="formItemZ"
              placeholder="Form Item Z"
            />
            <div className="text">Extra description if necessary.</div>
          </div>
        </form>
      </Row>
    </div>
  );
}
