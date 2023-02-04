import React from "react";

//SCSS Tag Group: pni
export default function PageNotImplemented({ pageName }) {
  return (
    <div className="pni-wr" id="pni-wr">
      <h1 className="pni-h" id="pni-h">
        Sorry, the {pageName} page has not yet been implemented.
      </h1>
    </div>
  );
}
