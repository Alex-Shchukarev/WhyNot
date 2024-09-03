<template>
  <el-dialog
    :model-value="isModal"
    v-bind="$attrs"
    modal-class="v-modal"
    :before-close="closeModal"
  >
    <slot />
  </el-dialog>
</template>

<script lang="js">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MobailBlockModal',
  props: {
    isModal: {
      type: Boolean,
      default: false
    }
  },
  setup(_, { emit }) {
    const closeModal = () => { emit('closeModal') }

    return { closeModal }
  }
})
</script>