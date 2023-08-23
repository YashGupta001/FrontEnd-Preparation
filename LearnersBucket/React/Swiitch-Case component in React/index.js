/*

https://www.youtube.com/watch?v=FCKLd38dIbs&list=PL_KW_uw2ITn8xWRkGZjKTfb-9xj_pJfgT&index=5

we have been asked to create a Switch-Case component that conditionally renders the child based on the equality check.

https://codesandbox.io/s/gracious-ganguly-w6pd7q



*/

import "./styles.css";
import { CustomSwitch, CustomCase, DefaultCase } from "./CustomSwitch";

export default function App() {
  return (
    <>
      <CustomSwitch value="30">
        <CustomCase value={(e) => e > 10}>Hello 10</CustomCase>
        <CustomCase value="20">Hello 20</CustomCase>
        <CustomCase value="30">Hello 30</CustomCase>
        <CustomCase value="10">Hello 10</CustomCase>
        <DefaultCase>Hello 40</DefaultCase>
      </CustomSwitch>
    </>
  );
}

//

import React, { Children } from "react";

const CustomSwitch = ({ value, children }) => {
  const cases = [];
  const defaults = [];

  Children.forEach(children, (e) => {
    if (e.type.name === "CustomCase") {
      if (typeof e.props.value === "function") {
        if (e.props.value(value)) {
          cases.push(e);
        }
      } else if (value === e.props.value) {
        cases.push(e);
      }
    } else if (e.type.name === "DefaultCase") {
      defaults.push(e);
    }
  });

  return cases.length > 0 ? cases : defaults;
};

const CustomCase = ({ children }) => {
  return <>{children}</>;
};

const DefaultCase = ({ children }) => {
  return <>{children}</>;
};

export { CustomSwitch, CustomCase, DefaultCase };
