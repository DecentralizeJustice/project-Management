<template>
  <v-toolbar>
    <v-toolbar-title>Project Managment</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat  v-bind:input-value="page.title==currentPage"
        v-for="page in pages"
        :key="page.title">
        <router-link  :to="page.link">
          {{page.title}}
        </router-link>
      </v-btn>
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
    pages: [
      { title: 'About', link: 'about' },
      { title: 'General', link: 'general' },
      { title: 'Multisig Crypto', link: 'multisig' },
      { title: 'Frequent Wallet', link: 'frequent' },
      { title: 'R and D', link: 'randd' },
      { title: 'Operations', link: 'operations' }
    ]
  })
}
</script>

<style scoped>
a{text-decoration: none;
color:white;}
</style>
