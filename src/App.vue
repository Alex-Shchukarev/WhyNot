<template>
  <MainView />
  <MobileBlockModal
    :isModal="isModal"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    :show-close="false"
  >
    <div class="modal_container">
      <div class="icon_modal">
        <img src="./assets/phone-to-rotation.svg" class="rotate_icon" alt="icon" />
      </div>
      <div class="text_modal">
        Поверните экран телефона
      </div>
    </div>
  </MobileBlockModal>
</template>

<script lang="js">
import { ref, computed } from 'vue'
import MainView from './views/MainView.vue'
import MobileBlockModal from './components/MobileBlockModal.vue'
import { useMainStore } from './stores/useMainStore'
import { dictionaryTypeBrowser, dictionaryOrientations } from './constants'

export default {
  name: 'App',
  components: {
    MainView,
    MobileBlockModal
  },
  setup() {
    const mainStore = useMainStore()
    mainStore.setTypeBrowser()
    const isModal = ref(false)
    const browserType = computed(() => mainStore.currentBrowserType)
    const isMobile = computed(() => browserType.value === dictionaryTypeBrowser.mobile)
    const orientationEvent = 'onorientationchange' in window ? 'orientationchange' : 'resize'
    const openDialog = () => { isModal.value = true }
    const closeDialog = () => { isModal.value = false }
    const toogleModal = () => {
      if (isMobile.value && dictionaryOrientations.landscape === mainStore.defineOrientation()) {
        openDialog()
      } else {
        closeDialog()
      }
    }
    toogleModal()
    window.addEventListener(orientationEvent, toogleModal, false)

    return { isMobile, isModal }
  }
};
</script>

<style>
@font-face {
  font-family: 'Roboto';
  src: local('Roboto-Regular'),
  url('~@/./assets/fonts/Roboto-Regular.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: 'Roboto';
  src: local('Roboto-Bold'),
  url('~@/./assets/fonts/Roboto-Bold.ttf') format('truetype');
  font-weight: 700;
  font-style: normal;
}
#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%!important;
  letter-spacing: 0.2px;
}
html,body{
  padding: 0;
  margin: 0;
  height: 100%;
  font-family: "Roboto", sans-serif;
}
.modal_container {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.icon_modal, .text_modal {
  display: flex;
  justify-content: center;
  align-items: center;
}
.rotate_icon {
  width: 80%;
  height: auto;
}
.text_modal {
  font-size: 16px;
  color: #000000;
  text-align: center;
}
</style>
