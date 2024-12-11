import { defineStore } from 'pinia'

export const useSettingsStore = defineStore('settings', {
  state: () => ({
    alarms: [
      { id: 1, name: '鬧鐘', file: new URL('@/assets/alarm.mp3', import.meta.url).href },
      { id: 2, name: 'yay', file: new URL('@/assets/yay.mp3', import.meta.url).href },
      { id: 3, name: '長號聲', file: new URL('@/assets/trombone.mp3', import.meta.url).href },
      { id: 4, name: 'foootsteps', file: new URL('@/assets/footsteps.mp3', import.meta.url).href },
      { id: 5, name: '鈴聲循環', file: new URL('@/assets/melodyloop.mp3', import.meta.url).href },

    ],
    selected: 1,
  }),
  getters: {
    selectedFile() {
      const i = this.alarms.findIndex((alarm) => alarm.id === this.selected)
      return this.alarms[i].file
    },
  },
  persist: {
    key: 'pomodoro-settings',
    pick: ['selected'],
  },
})
