import React from "react";
import { Row } from "react-bootstrap";

export default function RenderForm({ formState }) {
  const renderedForm = [];
  for (group in formState) {
    const groupQuestions = [];
    for (question in group) {
      _assembleQuestion(question, groupQuestions);
    }
    renderedForm.push(
      <Row className="group" id={group.header}>
        <form className="form">{groupQuestions}</form>
      </Row>
    );
  }
  return renderedForm;
}

const _assembleQuestion = (question, arr) => {
  const { placeholder, input, description, id } = question;
  let assembledQuestion = [];

  if (input === "select") {
    _handleSelect(question, placeholder, id, assembledQuestion);
  }

  //handlers for each type of input besides Select

  if (description) {
    assembledQuestion.push(<div className="text">{description}</div>);
  }

  arr.push(assembledQuestion);
};

//pushes a select element and options based  on an array of available options
const _handleSelect = (question, placeholder, id, assembledQuestion) => {
  const allOptions = [];
  let currentOption = 0;
  const { options } = question;
  options.forEach((option) => {
    currentOption++;
    allOptions.push(
      <option value={currentOption}>
        <option selected>{placeholder}</option>
        {option}
      </option>
    );
  });
  assembledQuestion.push(
    <select className="select" id={id}>
      {allOptions}
    </select>
  );
};

{
  /* 

finished example:

<div className="item">
  <input className="control" id="formItemX" placeholder="Form Item X" />
  <div className="text">Extra description if necessary.</div>
</div>;

*/
}
