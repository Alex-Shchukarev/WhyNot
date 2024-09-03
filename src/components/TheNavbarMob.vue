<template>
  <div class="mob_navbar">
    <img src="../assets/Logo-mob.svg" alt="logo" />
    <div class="nav_menu">
      <img src="../assets/inbox.svg" alt="inbox" />
      <img
        src="../assets/hamburger.svg"
        alt="menu"
        @click="openMenu"
      />
    </div>
  </div>
</template>

<script lang="js">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TheNavbarMob',
  setup(_, { emit }) {
    const openMenu = () => { emit('openMenu')}

    return { openMenu }
  }
});
</script>

<style scoped>
.mob_navbar {
  z-index: 10;
  height: 45px;
  padding: 0px 18px;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
}
.nav_menu {
  display: flex;
  align-items: center;
  gap: 18px;
}
</style>


