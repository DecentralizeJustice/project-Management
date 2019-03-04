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
  name: 'multisig',
  components: {
    toolbar
  },
  data: () => ({
    currentPage: 'Multisig Crypto'
  })
}
</script>

<style scoped>

</style>
