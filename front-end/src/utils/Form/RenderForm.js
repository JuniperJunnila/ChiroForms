import React from "react";
import { Row } from "react-bootstrap";

//rf1
export default function RenderForm({ formState }) {
  let { renderedForm, formKey, questionKey } = l_rF_l();
  for (let group in formState) {
    formKey++;
    const currentGroup = formState[group];
    const { groupQuestions } = l_rF_l();
    const { groupHeader } = currentGroup;
    for (let q in currentGroup) {
      questionKey++;
      const question = currentGroup[q];
      if (typeof question !== "string") {
        _assembleQuestionIoaiOnull(question, groupQuestions, questionKey);
      }
    }
    renderedForm.push(
      <Row className="rf1-ff" id={groupHeader} key={formKey}>
        {__parseHeaderIsOs(groupHeader)}
        <form className="rf1-f">{groupQuestions}</form>
      </Row>
    );
  }
  return renderedForm;
}

const l_rF_l = () => {
  const pkg = {
    renderedForm: [],
    groupQuestions: [],
    formKey: 0,
    questionKey: 0,
  };
  return pkg;
};

const _assembleQuestionIoaiOnull = (question, arr, questionKey) => {
  //assemblkes the individual question and then pushes them to the given array
  const { id, input, placeholder, description } = question;
  if (description) {
    arr.push(
      <div className="r1-txt" key={`description-${questionKey}`}>
        {description}
      </div>
    );
  }

  if (input === "select") {
    arr.push(__renderSelectIossssOnull(question, id, placeholder, questionKey));
  } else if (input === "checkbox" || input === "radio") {
    arr.push(__renderCheckIosssOnull(question, input, id, questionKey));
  } else if (input === "range") {
    arr.push(
      __renderInputsIsssssOnull(
        "rf1-fi-rn",
        id,
        input,
        placeholder,
        questionKey
      )
    );
  } else {
    arr.push(
      __renderInputsIsssssOnull(
        "rf1-fi-ctrl",
        id,
        input,
        placeholder,
        questionKey
      )
    );
  }
};

//pushes a select element and options based  on an array of available options
const __renderSelectIossssOnull = (
  { selections },
  id,
  placeholder,
  questionKey
) => {
  if (!selections) {
    return <></>;
  }

  let optionCount = 0;

  const options = selections.map((option) => {
    optionCount++;
    return <option value={optionCount}>{option}</option>;
  });
  return (
    <select className="rf1-fi-sct" id={id} key={questionKey}>
      <option selected>{placeholder}</option>
      {options}
    </select>
  );
};

const __renderCheckIosssOnull = ({ selections }, input, id, questionKey) => {
  if (!selections) {
    return <></>;
  }

  const options = selections.map((option) => {
    return (
      <div className="rf1-bx-ck" id={id} key={`${option}-${questionKey}-box`}>
        <label
          className="rf1-lab-ck"
          htmlFor={id}
          key={`${option}-${questionKey}-label`}
        >
          {option}
        </label>
        <input
          className="rf1-fi-ck"
          type={input}
          key={`${option}-${questionKey}`}
          value={option}
        />
      </div>
    );
  });

  return <div>{options}</div>;
};

const __renderInputsIsssssOnull = (
  inputClass,
  id,
  input,
  placeholder,
  questionKey
) => {
  return (
    <input
      className={inputClass}
      type={input}
      id={id}
      placeholder={placeholder}
      key={questionKey}
    ></input>
  );
};

const __parseHeaderIsOs = (groupHeader) => {
  let parsed = groupHeader.split("-");
  parsed = parsed.map((word) => {
    word = word.charAt(0).toUpperCase() + word.slice(1);
    return word;
  });
  return <h3>{parsed.join(" ")}</h3>;
};
