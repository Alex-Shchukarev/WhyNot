<template>
  <ul class="mob_menu__items">
    <li
      v-for="item in items"
      :key="`id_${item.id}`"
      class="menu_item"
      @click="chooseItem(item.id)"
    >
      {{ item.label }}
    </li>
  </ul>
</template>

<script lang="js">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TheMenuListMob',
  props: {
    items: {
      type: Array,
      require: true
    }
  },
  setup(_, { emit }) {
    const chooseItem = (id) => { emit('chooseMenuItem', id) }

    return { chooseItem }
  }
});
</script>

<style scoped>
.mob_menu__items {
  margin: 0;
  padding: 0 15px;
  list-style: none;
}
.menu_item {
  height: 30px;
  margin-bottom: 12px;
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
  color: #959597;
  border-bottom: 1px solid #EDEDED;
}
</style>


