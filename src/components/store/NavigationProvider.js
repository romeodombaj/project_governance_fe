import NavigationContext from "./navigation-context";
import { useState } from "react";

const NavigationProvider = (props) => {
  const [currentPanelIndex, setCurrentPanelIndex] = useState();

  const navigationContext = {
    currentPanelIndex: currentPanelIndex,
    setCurrentPanelIndex: setCurrentPanelIndex,
  };

  return (
    <NavigationContext.Provider value={navigationContext}>
      {props.children}
    </NavigationContext.Provider>
  );
};

export default NavigationProvider;
