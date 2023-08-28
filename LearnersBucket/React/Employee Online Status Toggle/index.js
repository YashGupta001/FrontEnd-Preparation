/*

https://www.youtube.com/watch?v=gu1P8MKeSi4&list=PL_KW_uw2ITn_OO9Ln_z9A_R9kMFVZiEvD&index=4

https://codesandbox.io/s/crazy-hawking-jwndjg?file=/src/CoworkersList.js

*/

import { useState } from "react";

// todo: create a simple status displayer
// onclick toggle employee status
//online or offline, default online

const CoworkersList = (props) => {
  const { coworkers } = props;

  const initialState = coworkers?.reduce((a, b) => {
    const name = b.first_name + b.last_name;
    a[name] = true;
    return a;
  }, {});

  const [employeeStatus, setEmployeeStatus] = useState(initialState);

  const toggleStatus = (name) => {
    setEmployeeStatus({ ...employeeStatus, [name]: !employeeStatus[name] });
  };

  return coworkers.map(({ first_name, last_name }) => {
    const name = first_name + last_name;
    return (
      <div key={name} onClick={() => toggleStatus(name)}>
        <p>
          Name: {first_name} {last_name}
        </p>
        <p>Status: {employeeStatus[name] ? "Online" : "Offline"} </p>
      </div>
    );
  });
};

CoworkersList.defaultProps = {
  coworkers: [
    { first_name: "Yash", last_name: "Gupta" },
    { first_name: "Santosh", last_name: "Jeebula" },
    { first_name: "Nikhil", last_name: "Gupta" },
  ],
};

export default CoworkersList;
