import React, { useState } from "react";
import RenderForm from "../../../utils/Form/RenderForm";
import formSeed from "./formSeed";

export default function HomeBody({ appState }) {
  const initialForms = formSeed;
  const [formState, setFormState] = useState(initialForms);

  const _handleFormChange = ({ target }) => {
    const { value, dataset } = target;
    const { parentname, groupname } = dataset;

    const formAtGroup = formState[groupname]
    const groupAtQuestion = formAtGroup[parentname]

    setFormState({
      ...formState,
      [groupname]: {
        ...formAtGroup,
        [parentname]: {
          ...groupAtQuestion,
          value: value,
        },
      },
    });
  };

  return (
    <div className="hb1-wrap" id="body-wrapper">
      <div className="hb1-h1-wrap" id="h1-wrap">
        <h1 className="hb1-h1" id="h1">
          Motor Vehicle Accident Questionnaire
        </h1>
      </div>

      <RenderForm formState={formState} _handleFormChange={_handleFormChange} />
    </div>
  );
}
