const actions = {
  setFileName: ({
    commit,
    state
  }, fileName) => {
    return commit("SET_FILENAME", fileName);
  },
  setMenuVisible: ({
    commit,
    state
  }, menuVisible) => {
    return commit("SET_MENUVISIBLE", menuVisible);
  }
};
export default actions;
