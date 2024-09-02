export const useThemeStore = defineStore('theme', {
  state: () => ({
    darkTheme: false
  }),
  actions: {
    changeTheme () {
      this.darkTheme = !this.darkTheme
    }
  }
})
