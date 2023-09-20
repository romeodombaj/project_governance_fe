import { useNavigate } from "react-router-dom";
import NavigationContext from "./navigation-context";
import { useContext, useEffect, useState } from "react";
import React from "react";
import LineContext from "./line-context";

const NavigationProvider = (props) => {
  const navigate = useNavigate();
  const [currentPanelIndex, setCurrentPanelIndex] = useState();
  const [openList, setOpenList] = useState(
    JSON.parse(localStorage.getItem("open-list")) || []
  );
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // navigation to selected item
  const navigateToItem = (item, mainLocation) => {
    console.log("navigate");

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

  const removeFromOpen = (item, mainLocation) => {
    const list = openList.filter((el) => el._id !== item._id);
    setOpenList(list);
    navigate(mainLocation);
  };

  const resetOpen = () => {
    setOpenList([]);
  };

  const navigationContext = {
    currentPanelIndex: currentPanelIndex,
    openList: openList,
    selectedIndex: selectedIndex,

    navigateToItem: navigateToItem,
    addToOpen: addToOpen,
    removeFromOpen,
    removeFromOpen,
    resetOpen,
    setCurrentPanelIndex: setCurrentPanelIndex,
  };

  useEffect(() => {
    localStorage.setItem("open-list", JSON.stringify(openList));
  }, [openList]);

  return (
    <NavigationContext.Provider value={navigationContext}>
      {props.children}
    </NavigationContext.Provider>
  );
};

export default NavigationProvider;
