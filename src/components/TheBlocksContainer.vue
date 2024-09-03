<template>
  <div class="blocks_container">
    TheBlocksContainer
    <div class="page_item">
      {{ item.label }}
    </div>
  </div>
</template>

<script lang="js">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TheBlocksContainer',
  components: {},
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped>
.blocks_container {
  height: 4500px;
  margin-top: 90px;
  padding: 12px;
}
.page_item {
  margin-top: 12px;
}

@media (orientation: portrait) and (min-width: 320px) and (max-width: 500px) {
  .blocks_container {
    height: 1500px;
    margin-top: 0;
    padding: 12px;
    overflow-y: auto;
  }
}
</style>