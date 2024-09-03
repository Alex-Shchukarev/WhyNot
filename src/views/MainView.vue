<template>
  <div class="main_view__container">
    <TheNavbarMob v-show="isMobile" @openMenu="openMenu" />
    <div class="border_container__content">
      <TheNavbarWeb
        v-show="!isMobile"
        :items="navItems"
        @chooseMenuItem="chooseMenuItem($event)"
      />
      <TheBlocksContainer :item="currentItem" />
    </div>
    <el-drawer 
      v-model="isSwitcherNavActions"
      :close-on-press-escape="false"
      :close-on-click-modal="false"
      :show-close="false"
      size="100%"
      :before-close="closeSwitcherNavActions"
      class="mob_switcher__drawer"
    >
      <template #header>
        <div class="drawer_header__container">
          <img src="../assets/Logo-mob.svg" alt="logo" />
          <img
            src="../assets/Close.svg"
            alt="close"
            @click="closeMenu"
          />
        </div>
      </template>
      <TheMenuListMob :items="navItems" @chooseMenuItem="chooseMenuItem($event)" />
      <template #footer>
        <div class="drawer_footer__container">
          <img src="../assets/search.svg" alt="search" />
          Москва и область
        </div>
      </template>
    </el-drawer>
  </div>
</template>

<script lang="js">
import { defineComponent, computed, reactive, ref } from 'vue'
import TheNavbarMob from '../components/TheNavbarMob.vue'
import TheNavbarWeb from '../components/TheNavbarWeb.vue'
import TheBlocksContainer from '../components/TheBlocksContainer.vue'
import TheMenuListMob from '../components/TheMenuListMob.vue'
import { navBarItems, dictionaryTypeBrowser } from '../constants'
import { useMainStore } from '../stores/useMainStore'
import { ElDrawer } from 'element-plus'

export default defineComponent({
  name: 'MainView',
  components: {
    TheNavbarMob,
    TheNavbarWeb,
    TheBlocksContainer,
    TheMenuListMob
  },
  setup() {
    const mainStore = useMainStore()
    const browserType = computed(() => mainStore.currentBrowserType)
    const isMobile = computed(() => browserType.value === dictionaryTypeBrowser.mobile)
    const currentItem = ref(navBarItems[0])
    const isSwitcherNavActions = ref(false)
    const navItems = reactive([ ...navBarItems ])

    const closeSwitcherNavActions = () => { closeMenu() }
    const chooseMenuItem = (key) => {
      currentItem.value = navBarItems.find(i => i.id === key)
      if (isSwitcherNavActions.value) { closeMenu() }
    }
    const openMenu = () => { isSwitcherNavActions.value = true }
    const closeMenu = () => { isSwitcherNavActions.value = false }

    return { navItems, isMobile, currentItem, isSwitcherNavActions, closeSwitcherNavActions, chooseMenuItem, openMenu, closeMenu }
  }
});
</script>

<style scoped>
.main_view__container {
  width: 100%;
  min-width: 1440px;
}
.border_container__content {
  box-sizing: border-box;
  width: 1120px;
  padding: 0 2px;
  height: 100%;
  margin: 0 auto;
  overflow-y: auto;
}
.drawer_header__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.drawer_footer__container {
  box-sizing: border-box;
  height: 56px;
  padding: 15px;
  display: flex;
  align-items: center;
  font-size: 16px;
  line-height: 22px;
  color: #959597;
  background-color: #F3F5F6;
}
.drawer_footer__container img {
  margin-right: 8px;
}
@media (orientation: portrait) and (min-width: 320px) and (max-width: 500px) {
  .main_view__container {
    min-width: auto;
    height: 100vh;
  }
  .border_container__content {
    width: 100%;
    padding: 0;
    padding-top: 45px;
  }
}
</style>