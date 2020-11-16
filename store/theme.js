export const state = () => ({
  backgroundColor: "#FFFFFFF",
  textTureColor:'',
  backgroundGradientColor:"#",
  shadowColor: "",
  accentColor: "",
  accentGradientColor: "to right,cornflowerblue, blue,blue",
  textColor: "",
  subTextColor: "",
  invertTextColor: "",
  invertSubTextColor: "rgba(255,255,255,0.7)",
  textGradientColor: "cornflowerblue,blue,blue",

  isDarkTheme:false
})


export const mutations = {
  setBackgroundColor(state, color) {
    state.backgroundColor = color
  },
  setTextTureColor(state, color) {
    state.textTureColor = color
  },
  setBackgroundGradientColor(state, color) {
    state.backgroundGradientColor = color
  },
  setShadowColor(state, color) {
    state.shadowColor = color
  },
  setAccentColor(state, color) {
    state.accentColor = color
  },
  setAccentGradientColor(state, color) {
    state.accentGradientColor = color
  },
  setTextColor(state, color) {
    state.textColor = color
  },
  setSubTextColor(state, color) {
    state.subTextColor = color
  },
  setTextGradientColor(state, color) {
    state.textGradientColor = color
  },

  setIsDarkTheme(state,type){
     state.isDarkTheme = type
  },

  setTheme(state, theme) {
      state.backgroundColor = theme.backgroundColor,
      state.textTureColor = theme.textTureColor,
      state.backgroundGradientColor = theme.backgroundGradientColor,
      state.shadowColor = theme.shadowColor,
      state.accentColor = theme.accentColor,
      state.accentGradientColor = theme.accentGradientColor,
      state.textColor = theme.textColor,
      state.subTextColor = theme.subTextColor,
      state.invertTextColor = theme.invertTextColor,
      state.invertSubTextColor = theme.invertSubTextColor,
      state.textGradientColor = theme.textGradientColor,

      state.isDarkTheme = theme.isDarkTheme
  }
}
