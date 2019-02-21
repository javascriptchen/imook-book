const actions = {
  setFileName: ({
    commit
  }, fileName) => {
    return commit("SET_FILENAME", fileName);
  },
  setMenuVisible: ({
    commit
  }, menuVisible) => {
    return commit("SET_MENUVISIBLE", menuVisible);
  },
  setSettingVisible: ({
    commit
  }, visible) => {
    return commit("SET_SETTING_VISIBLE", visible);
  }
};
export default actions;
