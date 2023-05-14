import React from "react";

const NavigationContext = React.createContext({
  currentPanelIndex: 0,
  openList: [],
  addToOpen: () => {},
  setCurrentPanelIndex: () => {},
});

export default NavigationContext;
