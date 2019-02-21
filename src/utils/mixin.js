import {
  mapGetters,
  mapActions
} from "vuex";

export const ebookMixin = {
  computed: {
    ...mapGetters([
      "fileName",
      "menuVisible",
      "settingVisible"
    ])
  },
  methods: {
    ...mapActions([
      "setFileName",
      "setMenuVisible",
      "setSettingVisible"
    ])
  }
};
