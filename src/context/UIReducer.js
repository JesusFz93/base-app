const reducer = (globalState, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        ...globalState,
        isDarkMode: !globalState.isDarkMode,
      };

    case "TOGGLE_SIDEBAR":
      return {
        ...globalState,
        isSidebarOpen: !globalState.isSidebarOpen,
      };

    case "IS_MODAL_OPEN":
      return {
        ...globalState,
        isModalOpen: !globalState.isModalOpen,
      };

    default:
      return globalState;
  }
};

export default reducer;
