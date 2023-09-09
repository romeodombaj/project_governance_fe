import { useNavigate } from "react-router-dom";
import NavigationContext from "./navigation-context";
import { useState } from "react";

const NavigationProvider = (props) => {
  const navigate = useNavigate();
  const [currentPanelIndex, setCurrentPanelIndex] = useState();
  const [openList, setOpenList] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // navigation to selected item
  const navigateToItem = (item, mainLocation) => {
    navigate(`${mainLocation}/${item._id}`, { state: { option: item } });
    const index = openList.findIndex((el) => el._id === item._id);

    if (index != -1) {
      setSelectedIndex(index);
    } else {
      setSelectedIndex(openList.length);
    }
  };

  // item opening
  const addToOpen = (item, mainLocation) => {
    const unique = !openList.find((el) => el._id === item._id);
    if (unique) {
      setOpenList((prevVal) => [...prevVal, item]);
    }

    navigateToItem(item, mainLocation);
  };

  const navigationContext = {
    currentPanelIndex: currentPanelIndex,
    openList: openList,
    selectedIndex: selectedIndex,
    navigateToItem: navigateToItem,
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
