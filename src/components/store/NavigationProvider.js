import NavigationContext from "./navigation-context";
import { useState } from "react";

const NavigationProvider = (props) => {
  const [currentPanelIndex, setCurrentPanelIndex] = useState();
  const [openList, setOpenList] = useState([]);

  const addToOpen = (id) => {
    setOpenList((prevVal) => [...prevVal, { name: id }]);
    /*if (!Object.values(openList).includes(id)) {
      setOpenList((prevVal) => [...prevVal, { name: id }]);
    }*/
  };

  const navigationContext = {
    currentPanelIndex: currentPanelIndex,
    openList: openList,
    addToOpen: addToOpen,
    setCurrentPanelIndex: setCurrentPanelIndex,
  };

  return (
    <NavigationContext.Provider value={navigationContext}>
      {props.children}
    </NavigationContext.Provider>
  );
};

export default NavigationProvider;
