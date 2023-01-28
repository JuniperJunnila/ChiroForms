import React, { useState } from "react";
import RenderForm from "../../../utils/Form/RenderForm";
import formSeed from "./formSeed";

export default function HomeBody({ appState }) {
  
  const [formState, setFormState] = useState(formSeed);

  return (
    <div className="hb1-wrap" id="body-wrapper">
      <div className="hb1-h1-wrap" id="h1-wrap">
        <h1 className="hb1-h1" id="h1">
          Motor Vehicle Accident Questionnaire
        </h1>
      </div>

      <RenderForm formState={formState} />
    </div>
  );
}
