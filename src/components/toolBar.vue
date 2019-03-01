<template>
  <v-toolbar>
    <v-toolbar-title>Project Managment</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat  v-bind:input-value="page==currentPage" v-for="(page, index) in pages"
        :key="index">{{page}}</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: 'toolBar',
  props: {
    currentPage: {
      type: String,
      required: true
    }
  },
  data: () => ({
    pages: ['About', 'General', 'Multisig Crypto', 'Frequent Wallet', 'R and D',
      'Operations']
  })
}
</script>

<style>

</style>
