/*

Implement a stepper component in Reactjs with multiple-steps that are auto-generated based on the input list and provide an option to the component to navigate the steps at will. Make it extensible and reusable.


https://www.youtube.com/watch?v=D_aVRMu3acw&list=PL_KW_uw2ITn8xWRkGZjKTfb-9xj_pJfgT&index=35

code sandbox: https://codesandbox.io/s/cool-lake-cn2nnv

*/

import "./styles.css";
import Stepper from "./Stepper";

export default function App() {
  const list = [<Example1 />, <Example2 />, <Example3 />, <Example4 />];
  return (
    <div className="App">
      <Stepper list={list} />
    </div>
  );
}

const Example1 = ({ onPrev, onNext }) => {
  return (
    <>
      <h1>Hello 1</h1>
      <div>
        <button onClick={onPrev}>Prev</button>
        <button onClick={onNext}>Next</button>
      </div>
    </>
  );
};

const Example2 = ({ onPrev, onNext }) => {
  return (
    <>
      <h1>Hello 2</h1>
      <div>
        <button onClick={onPrev}>Prev</button>
        <button onClick={onNext}>Next</button>
      </div>
    </>
  );
};

const Example3 = ({ onPrev, onNext }) => {
  return (
    <>
      <h1>Hello 3</h1>
      <div>
        <button onClick={onPrev}>Prev</button>
        <button onClick={onNext}>Next</button>
      </div>
    </>
  );
};

const Example4 = ({ onPrev, onNext }) => {
  return (
    <>
      <h1>Hello 4</h1>
      <div>
        <button onClick={onPrev}>Prev</button>
        <button onClick={onNext}>Next</button>
      </div>
    </>
  );
};

/// Stepper

// It will accept a list of components

// based on the size of the list it will generate the steps

import React, { useState } from "react";

const Stepper = ({ list }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const stepsCount = list.length;
  const steps = [];

  for (let i = 0; i < stepsCount; i++) {
    steps.push(
      <div
        className={`steps ${currentStep >= i ? "active" : ""}`}
        key={i}
        onClick={() => handleClick(i)}
      >
        {i + 1}
      </div>
    );
  }

  const handleClick = (i) => {
    setCurrentStep(i);
  };

  const progressLineWidth = (100 / (list.length - 1)) * currentStep;

  const onPrev = () => {
    if (currentStep !== 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onNext = () => {
    if (currentStep !== list.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <section className="stepper">
      <div className="steps-container">
        <div className="steps-wrapper">{steps}</div>
        <div
          className="progress-line"
          style={{ width: `${progressLineWidth}%` }}
        ></div>
      </div>
      <div>{React.cloneElement(list[currentStep], { onPrev, onNext })}</div>
    </section>
  );
};

// export default Stepper;
