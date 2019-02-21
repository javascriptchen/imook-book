const book = {
  state: {
    fileName: "",
    menuVisible: false,
    settingVisible: -1 // -1不显示 0字号 1主题
  },
  mutations: {
    "SET_FILENAME": (state, fileName) => {
      state.fileName = fileName;
    },
    "SET_MENUVISIBLE": (state, menuVisible) => {
      state.menuVisible = menuVisible;
    },
    "SET_SETTING_VISIBLE": (state, visible) => {
      state.settingVisible = visible;
    }
  }
};

module.exports = book;
