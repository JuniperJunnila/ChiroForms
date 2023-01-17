import React from "react";

export default function PageNotImplemented({ pageName }) {
  return (
    <div className="wrapper-pni" id="wrapper-pni">
      <h1 className="header1" id="header1">
        Sorry, the {pageName} page has not yet been implemented.
      </h1>
    </div>
  );
}
