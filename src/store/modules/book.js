const book = {
  state: {
    fileName: 1
  },
  mutations: {
    "SET_FILENAME": (state, newfileName) => {
      state.fileName = newfileName;
    }
  },
  actions: {
    setFileName: ({
      commit,
      state
    }, newfileName) => {
      return commit("SET_FILENAME", newfileName);
    }
  }
};

module.exports = book;
