/*

Create feature flag in React: https://www.youtube.com/watch?v=4lzn22noamY&list=PL_KW_uw2ITn8xWRkGZjKTfb-9xj_pJfgT&index=4

Create a feature flag component in React that consumes a feature's API and conditionally renders UI based on the value of the feature. This question was asked in Atlassian's machine coding interview.


very imp go throught the video again

https://www.flagsmith.com/

*/

// FeatureFlag.js   https://codesandbox.io/s/laughing-varahamihira-n5w8w3

import React, { createContext, useState } from "react";

export const FeatureFlag = createContext({});
export const FeatureFlagProvider = ({ children }) => {
  const [features, setFeatures] = useState({
    isGooglePayEnabled: true,
    isApplePayEnabled: false,
  });
  return (
    <FeatureFlag.Provider value={{ features }}>{children}</FeatureFlag.Provider>
  );
};

//App.js

import "./styles.css";
import React, { useContext } from "react";
import { FeatureFlagProvider, FeatureFlag } from "./context/FeatureFlag";

const Example = () => {
  return (
    <>
      <Feature feature="isGooglePayEnabled">Google</Feature>
      <Feature feature="isApplePayEnabled">Apple</Feature>
    </>
  );
};

const Feature = ({ feature, children }) => {
  const { features } = useContext(FeatureFlag);
  return features[feature] ? children : null;
};

export default function App() {
  return (
    <FeatureFlagProvider>
      <Example />
    </FeatureFlagProvider>
  );
}

// Also can pass more checks

const Example1 = () => {
  return (
    <>
      <Feature feature="isGooglePayEnabled" value={true}>
        Google
      </Feature>
      <Feature feature="isApplePayEnabled" value={false}>
        Apple
      </Feature>
    </>
  );
};

const Feature1 = ({ feature, children, value }) => {
  const { features } = useContext(FeatureFlag);
  return features[feature] === value ? children : null;
};

// For the caching we can use the local storage and persist the data in that
