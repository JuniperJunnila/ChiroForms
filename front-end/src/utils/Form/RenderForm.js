import React from "react";
import { Row } from "react-bootstrap";

//SCSS Tag Group: rf1
export default function RenderForm({ formState, _handleFormChange }) {
  //unpacks empty variables
  let { renderedForm, formKey, questionKey } = l_rF_l();

  //iterates through the groups in the form
  for (let group in formState) {
    formKey++;
    const currentGroup = formState[group];
    const currentgroupname = currentGroup.parentname;
    const { groupQuestions } = l_rF_l();
    const { groupHeader } = currentGroup;

    //iterates through questions in group
    for (let q in currentGroup) {
      questionKey++;
      const question = currentGroup[q];
      //ensures only questions are added, not properties of the group
      if (typeof question !== "string") {
        _assembleQuestion(
          question,
          groupQuestions,
          questionKey,
          currentgroupname,
          formState,
          _handleFormChange
        );
      }
    }
    //pushes the group of form inputs to what will be the final render
    renderedForm.push(
      <Row className="rf1-ff" id={groupHeader} key={formKey}>
        {__parseHeader(groupHeader)}
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
//Input: object, array, integer, string, object, and function
//Output: null
//Pushes an series of React elements into the inputted array to be rendered
const _assembleQuestion = (
  question,
  arr,
  questionKey,
  currentgroupname,
  formState,
  _handleFormChange
) => {
  const { description, input, parentname } = question;
  const currentLocation = formState[currentgroupname][parentname];

  //optionally adds a description element
  if (description) {
    arr.push(
      <div className="r1-txt" key={`description-${questionKey}`}>
        {description}
      </div>
    );
  }

  //selects method of element formation by input type
  if (input === "select") {
    arr.push(
      __renderSelect(
        question,
        questionKey,
        currentLocation,
        _handleFormChange,
        currentgroupname,
        parentname
      )
    );
  } else if (input === "checkbox" || input === "radio") {
    arr.push(
      __renderCheck(
        question,
        questionKey,
        currentLocation,
        _handleFormChange,
        currentgroupname,
        parentname
      )
    );
  } else if (input === "range") {
    arr.push(
      __renderInputs(
        "rf1-fi-rn",
        question,
        questionKey,
        currentLocation,
        _handleFormChange,
        currentgroupname,
        parentname
      )
    );
  } else {
    arr.push(
      __renderInputs(
        "rf1-fi-ctrl",
        question,
        questionKey,
        currentLocation,
        _handleFormChange,
        currentgroupname,
        parentname
      )
    );
  }
};

//Input: object{object, string, string}, int, object, function
//Output: null
//pushes a select element and options based on an array of available options
const __renderSelect = (
  { selections, id, placeholder },
  questionKey,
  currentLocation,
  _handleFormChange,
  currentgroupname,
  parentname
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
    <select
      className="rf1-fi-sct"
      id={id}
      key={questionKey}
      value={currentLocation.value}
      onChange={_handleFormChange}
      data-parentname={parentname}
      data-groupname={currentgroupname}
    >
      <option selected>{placeholder}</option>
      {options}
    </select>
  );
};

//Input: object{object, string, int}, int, object, function
//Output: null
//pushes a check or array element and options based on an array of available options
const __renderCheck = (
  { selections, input, id },
  questionKey,
  currentLocation,
  _handleFormChange,
  currentgroupname,
  parentname
) => {
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

  return (
    <div
      key={id}
      value={currentLocation.value}
      onChange={_handleFormChange}
      data-parentname={parentname}
      data-groupname={currentgroupname}
    >
      {options}
    </div>
  );
};

//Input: string, string, string, int, string, int, object, function
//Output: null
//pushes an input element based on a chosen class
const __renderInputs = (
  inputClass,
  { id, input, placeholder },
  questionKey,
  currentLocation,
  _handleFormChange,
  currentgroupname,
  parentname
) => {
  return (
    <input
      className={inputClass}
      type={input}
      id={id}
      placeholder={placeholder}
      key={questionKey}
      value={currentLocation.value}
      onChange={_handleFormChange}
      data-parentname={parentname}
      data-groupname={currentgroupname}
    ></input>
  );
};

//Input: string
//Output: react Element
//Changes the header from kebab-case into Formatted Headers in a react element
const __parseHeader = (groupHeader) => {
  let parsed = groupHeader.split("-");
  parsed = parsed.map((word) => {
    word = word.charAt(0).toUpperCase() + word.slice(1);
    return word;
  });
  return <h3>{parsed.join(" ")}</h3>;
};
