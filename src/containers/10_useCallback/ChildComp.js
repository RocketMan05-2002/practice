import React from "react";

const ChildComp = React.memo((props) => {
  console.log("Child component got rerendered");
  return (
    <div>
      <button onClick={props.handleClick}>{props.buttonName}</button>
    </div>
  );
});

export default ChildComp;

/*

import React from 'react'

const ChildComp = React.memo(
    (props) => {
        console.log("Child component got rerendered");
      return (
        <div>
          <button>{props.buttonName}</button>
        </div>
      )
    }
)

export default ChildCompss

*/
