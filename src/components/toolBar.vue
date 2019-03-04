<template>
  <div>
    <v-toolbar>
      <v-toolbar-side-icon class="hidden-md-and-up" @click.stop="drawer = !drawer"></v-toolbar-side-icon >
      <v-toolbar-title>Project Managment</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat  v-bind:input-value="page.title==currentPage"
          v-for="page in pages"
          :key="page.title">
          <router-link  :to="page.link">
            {{page.title}}
          </router-link>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
      >
        <v-list class="pt-0" dense>
          <v-divider></v-divider>
          <v-list-tile
            v-for="page in pages"
            :key="page.title"
          >
            <v-list-tile-content>
              <v-list-tile-title>
                <router-link  :to="page.link">
                  {{page.title}}
                </router-link></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
  </v-navigation-drawer>
</div>
</template>

<script>
export default {
  name: 'toolBar',
  props: {

  },
  data: () => ({
    pages: [
      { title: 'About', link: 'about' },
      { title: 'Overview', link: 'overview' },
      { title: 'Multisig Crypto', link: 'multisig' },
      { title: 'Frequent Wallet', link: 'frequent' },
      { title: 'R and D', link: 'randd' },
      { title: 'Operations', link: 'operations' }
    ],
    drawer: null,
    items: [
      { title: 'Home', icon: 'dashboard' },
      { title: 'About', icon: 'question_answer' }
    ]
  })
}
</script>

<style scoped>
a{text-decoration: none;
color:white;}
</style>
