<template>
  <div>
    <toolbar  v-bind:currentPage="currentPage" />
    <v-container grid-list-md text-xs-center fluid>
  <v-layout row wrap>
    <v-flex xs12 sm6 offset-sm3>
          <v-card>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">About</h3>
              </div>
            </v-card-title>
            <v-divider light></v-divider>
            <v-card-text class="subheading text-xs-left">
              <div> This is the main project managment page for Decentrlize Justice. This is where you can check to see how the project is going. Its our attempt
              at having an open and recorded project managment system. The major goals of this page are:</div>
              <ul>
                <li>Offer a type of black box recording of all project managment activities. </li>
                <li>Make is as easy to contribute using a open <a href="https://en.wikipedia.org/wiki/Kanban">kanban</a> style project managment cycle</li>
                <li>Offer customers and others a clear look at how we operate. </li>
              </ul>
              If you have any issues please feel free to open them in our gituhub issue.
              If you would like to contribute please submit a pr to this page under the prject you wisht to work on.
              If you have any general questions ask them on our reddit page.
            </ul>
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn flat href="https://github.com/DecentralizeJustice/project-Management/issues" color="primary">Github Issues</v-btn>
              <v-btn flat href="https://www.reddit.com/r/DecentralizeJustice/" color="primary">Reddit</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
  </v-layout>
  </v-container>
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
