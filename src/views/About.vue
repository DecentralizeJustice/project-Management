<template>
  <div>
    <toolbar  v-bind:currentPage="currentPage" />

  </div>
</template>

<script>
import toolbar from '@/components/toolBar.vue'

export default {
  name: 'about',
  components: {
    toolbar
  },
  data: () => ({
    currentPage: 'About'
  })
}
</script>

<style scoped>

</style>
