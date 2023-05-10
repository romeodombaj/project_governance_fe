import React from "react";

const NavigationContext = React.createContext({
  currentPanelIndex: 0,
  setCurrentPanelIndex: () => {},
});

export default NavigationContext;
