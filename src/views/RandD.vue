<template>
  <div>
    <toolbar  v-bind:currentPage="currentPage" />
    <v-container grid-list-md text-xs-center fluid>
  <v-layout row wrap>
  </v-layout>
  </v-container>
  </div>
</template>

<script>
import toolbar from '@/components/toolBar.vue'

export default {
  name: 'randd',
  components: {
    toolbar
  },
  data: () => ({
    currentPage: 'R and D'
  })
}
</script>

<style scoped>

</style>
