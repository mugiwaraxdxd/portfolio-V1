import { defineStore } from 'pinia'

export const observerStore = defineStore('observerStore', {
  state: () => {
    return{
      section: 0
    }
  },
  actions: {
    setCurrentSection(section) {
      this.section = section;
    }
  },
  persist: {
    storage: sessionStorage,
    paths: ['observerStore']
  }
})
