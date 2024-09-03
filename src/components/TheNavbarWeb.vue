<template>
  <div class="web_navbar">
    <div class="nav_border__header">
      <div class="nav_header">
        <img src="../assets/Logo.svg" alt="logo" />
        <div class="nav_additional">
          <div class="location">
            <img src="../assets/search.svg" alt="search" />
            Москва и область
          </div>
          <img src="../assets/inbox.svg" alt="inbox" />
        </div>
      </div>
    </div>
    <div class="nav_border__menu">
      <div class="nav_menu">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="chooseItem"
        >
          <el-menu-item
            v-for="item in items"
            :key="`id_${item.id}`"
            :index="item.id"
          >
            {{ item.label }}
          </el-menu-item>
        </el-menu>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'TheNavbarWeb',
  props: {
    items: {
      type: Array,
      require: true
    }
  },
  setup(_, { emit }) {
    const activeIndex = ref('1')

    const chooseItem = (key) => { emit('chooseMenuItem', key) }

    return { activeIndex, chooseItem }
  }
});
</script>

<style scoped>
.web_navbar {
  z-index: 10;
  width: 100%;
  height: 85px;
  position: fixed;
  top: 0px;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.nav_border__header, .nav_border__menu {
  display: flex;
  justify-content: center;
}
.nav_border__header {
  background-color: black;
}
.nav_header {
  width: 1120px;
  height: 40px;
  padding: 0 2px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav_additional {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.location {
  display: flex;
  align-items: center;
  color: #7C8792;
}
.location img {
  margin-right: 9px;
}
.nav_additional img {
  margin-left: 31px;
}
.nav_menu {
  width: 1120px;
  height: 47px;
  padding: 0 2px;
}
</style>


