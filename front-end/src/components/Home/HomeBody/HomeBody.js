import React, { useState } from "react";
import RenderForm from "../../../utils/Form/RenderForm";
import formSeed from "./formSeed";

export default function HomeBody({ appState }) {
  const initialForms = formSeed;
  const [formState, setFormState] = useState(initialForms);

  const _handleFormChange = ({ target }) => {
    const { value, dataset } = target;
    const { parentname, groupname } = dataset;

    const formAtGroup = formState[groupname];
    const groupAtQuestion = formAtGroup[parentname];

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
    <div
      className="hb1-wrap"
      id="body-wrapper"
      data-bs-spy="scroll"
      data-bs-target="#n1-nav"
      data-bs-root-margin="0px 0px -40%"
      data-bs-smooth-scroll="true"
      tabIndex="0"
    >
      <div className="hb1-h1-wrap" id="h1-wrap">
        <h1 className="hb1-h1" id="h1">
          Motor Vehicle Accident Questionnaire
        </h1>
      </div>

      <RenderForm formState={formState} _handleFormChange={_handleFormChange} />
      
      <legal>
        <h3>Medical Report and Irrevocable Doctor’s Lien</h3>
        <p>
          I do hereby authorize my doctor, <b>Rick Junnila DC</b> at 5351 Neroly
          Road, Suite B Oakley CA, 94561 (mail: PO Box 129 Oakley 92561) to
          furnish you, my attorney, with a full report of his examination,
          diagnosis, treatment, progress, etc., of myself in regard to the
          accident in which I was recently involved and authorize the doctor to
          speak with my attorney regarding my case.
        </p>
        <p>
          I hereby irrevocably authorize and direct you, my attorney, to pay
          directly to said doctor such sums as may be due and owing him for
          medical service rendered me both by reason of this accident and by
          reason of any other bills that are due his office and to withhold such
          sums from any settlement, judgment of verdict as may be necessary to
          adequately protect said doctor. And I hereby further give a Lien on my
          case to said doctor against any and all proceeds of my settlement,
          judgment or verdict which may be paid to you, my attorney, or myself,
          as the result of the injuries for which I have been treated or
          injuries in connection therewith.
        </p>
        <p>
          I agree never to rescind this irrevocable document and direct that
          that a rescission will not be honored by my attorney. I hereby
          instruct that in the event that another attorney is substitute in this
          matter, the new attorney honor this lien as inherent to the settlement
          and enforceable upon the case as if it were executed by him.
        </p>
        <p>
          I fully understand that I am directly and fully responsible to said
          doctor for all medical bills submitted by him for service rendered me
          and that this agreement is made solely for said doctor’s additional
          protection and in consideration of his awaiting payment. And I further
          understand that such payment is not contingent on any settlement,
          judgment or verdict by which I may eventually recover said fee.
        </p>
        <p>
          Please acknowledge this letter by signing below and returning to the
          doctor’s office. I have been advised that if my attorney does not wish
          to cooperate in protecting the doctor’s interest, the doctor will not
          await payment but will require me to make payments on a current basis
        </p>
        <p>
          The undersigned being attorney of record for the above patient does
          hereby agree to observe all the terms of the above and agrees to
          withhold such sums from any settlement, judgment or verdict, as may be
          necessary to adequately protect said doctor above-named.
        </p>
        <p>
          <b>Medical Payment and Authorization to Sign:</b> I hereby authorize
          my doctor to collect medical payment(s) directly from my automobile
          insurance (if any) and I direct my attorney to allow doctor to collect
          payment directly from my insurance company. Further, I authorize the
          endorsement of my name to any check/draft containing my name to which
          the doctor is legally entitled, in the form of medical bills owed and
          paid by my attorney or my insurance company for healthcare services,
          without my being present.
        </p>
      </legal>
    </div>
  );
}
