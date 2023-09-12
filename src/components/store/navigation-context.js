import React from "react";

const NavigationContext = React.createContext({
  currentPanelIndex: 0,
  openList: [],
  selectedIndex: -1,
  navigateToItem: () => {},
  addToOpen: () => {},
  removeFromOpen: () => {},
  setCurrentPanelIndex: () => {},
});

export default NavigationContext;
