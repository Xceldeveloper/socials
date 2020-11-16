export default {
  data() {
    return {
      lightTheme: null,
      darkTheme: null,
    }
  },

  mounted() {
    this.getTheme();
  },

  methods: {

    getTheme() {
      var fromStorage = localStorage.getItem('isDarkTheme'),
        currTheme;
      if (fromStorage === null) {
        currTheme = false;
      } else {
        currTheme = fromStorage;
        if(currTheme === "true"){
          this.$store.commit('theme/setIsDarkTheme', true);
        }else{
          this.$store.commit('theme/setIsDarkTheme', false);
        }
      }
      console.log("Getting theme from db");
     
      if (this.$store.state.theme.isDarkTheme === true) {
        this.setDarkTheme();
      
        this.$store.commit('theme/setIsDarkTheme', true);
      } else if (this.$store.state.theme.isDarkTheme === false) {
        this.setLightTheme();
        this.$store.commit('theme/setIsDarkTheme', false);
      }

    },

    setLightTheme() {
      this.$vuetify.theme.light
      var fromStorage = localStorage.getItem('lightTheme'),
        theme, serializeTheme;

      var themeFromServer = {
        backgroundColor: "#f5f5f5",
        textTureColor:'#ffffff',
        backgroundGradientColor: "to bottom, #efefef, #ccc",
        shadowColor: "grey",
        accentColor: "red",
        accentGradientColor: "to right,cornflowerblue, blue,blue",
        textColor: "#000000",
        subTextColor: "#1b1b1b",
        invertTextColor: "#ffffff",
        invertSubTextColor: "#929796",
        textGradientColor: "cornflowerblue,blue,blue",
        isDarkTheme: false
      }
      if (fromStorage == null) {
        theme = JSON.stringify(themeFromServer);
        this.$store.commit('theme/setTheme', themeFromServer);
        localStorage.setItem('lightTheme', theme);
        this.lightTheme = themeFromServer;
      } else {
        serializeTheme = JSON.parse(fromStorage);
        this.$store.commit('theme/setTheme', serializeTheme);
        theme = serializeTheme;
        this.lightTheme = theme;
      }

    },
    setDarkTheme() {
      this.$vuetify.theme.dark
      var fromStorage = localStorage.getItem('darkTheme'),
        theme, serializeTheme;

      var themeFromServer = {
        backgroundColor: "#222222",
        textTureColor:"#1b1b1b",
        backgroundGradientColor: "to bottom, #efefef, #ccc",
        shadowColor: "#000000",
        accentColor: "red",
        accentGradientColor: "to right,cornflowerblue, blue,blue",
        textColor: "#ededed",
        subTextColor: "#929796",
        invertTextColor: "#000000",
        invertSubTextColor: "#1b1b1b",
        textGradientColor: "cornflowerblue,blue,blue",
        isDarkTheme: true
      }

      if (fromStorage == null) {
        theme = JSON.stringify(themeFromServer);
        this.$store.commit('theme/setTheme', themeFromServer);
        localStorage.setItem('darkTheme', theme);
        this.darkTheme = themeFromServer;
      } else {
        serializeTheme = JSON.parse(fromStorage);
        this.$store.commit('theme/setTheme', serializeTheme);
        theme = serializeTheme;
        this.darkTheme = theme;
      }
    }
  },
  computed: {
    Colors() {
      var mm = {
        accent: this.$store.state.theme.accentColor,
        text: this.$store.state.theme.textColor,
        subTextColor: this.$store.state.theme.subTextColor,
        background: this.$store.state.theme.backgroundColor,
        textTure:this.$store.state.theme.textTureColor,
        accentGradient: this.$store.state.theme.accentGradientColor,
        backgroundGradient: this.$store.state.theme.backgroundGradientColor,
        invertTextColor: this.$store.state.theme.invertTextColor,
        invertSubTextColor: this.$store.state.theme.invertSubTextColor,
        shadowColor: this.$store.state.theme.shadowColor
      }
      return mm;
    },

    isDarkTheme() {
      return this.$store.state.theme.isDarkTheme;
    }
  }
}
