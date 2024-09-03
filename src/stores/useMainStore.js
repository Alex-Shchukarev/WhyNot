import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { dictionaryTypeBrowser, dictionaryOrientations } from '../constants'

export const useMainStore = defineStore('main', () => {
  const browserType = ref('')
  const currentBrowserType = computed(() => browserType.value)

  function detectMob() {
    const toMatch = [ /Android/i, /webOS/i, /iPhone/i, /iPad/i, /iPod/i, /BlackBerry/i, /Windows Phone/i ]
    return toMatch.some((toMatchItem) => { return navigator.userAgent.match(toMatchItem) })
  }

  function setTypeBrowser() {
    browserType.value = detectMob() ? dictionaryTypeBrowser.mobile : dictionaryTypeBrowser.web
  }

  function defineOrientation() {
    let orientation = dictionaryOrientations.portrait
    if(window?.screen?.orientation?.type.includes(dictionaryOrientations.landscape)) {
      orientation = dictionaryOrientations.landscape
    }
    return orientation
  }
  
  return { currentBrowserType, detectMob, setTypeBrowser, defineOrientation }

})