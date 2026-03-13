import { useReducer } from "react";
import UIContext from "./UIContext";
import AppReducer from "./UIReducer";

const initialState = {
  isDarkMode: false,
  isSidebarOpen: false,
  isModalOpen: false,
};

const UIState = ({ children }) => {
  const [globalState, dispatch] = useReducer(AppReducer, initialState);

  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  const toggleSidebar = () => {
    dispatch({ type: "TOGGLE_SIDEBAR" });
  };

  const toggleModal = () => {
    dispatch({ type: "IS_MODAL_OPEN" });
  };

  return (
    <UIContext.Provider
      value={{
        isDarkMode: globalState.isDarkMode,
        toggleTheme,
        isSidebarOpen: globalState.isSidebarOpen,
        toggleSidebar,
        isModalOpen: globalState.isModalOpen,
        toggleModal,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

export default UIState;
