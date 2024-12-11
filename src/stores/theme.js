import { defineStore } from 'pinia'

const myThemes = ['dark', 'light', 'customDarkTheme', 'customLightTheme', 'customTheme']

export const useThemeStore = defineStore('theme', {
  state: () => ({
    currentTheme: 'dark'
  }),
  actions: {
    setTheme(i) {
      this.currentTheme = myThemes[i].toString()
    },
  },
  getters: {
    getmyThemes() {
      return myThemes
    }
  },
  persist: {
    key: 'pomodoro.theme',
    pick: ['currentTheme'],
  }
})
