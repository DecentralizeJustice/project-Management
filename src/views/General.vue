<template>
  <div>
    <toolbar  v-bind:currentPage="currentPage" />
    <v-container grid-list-md text-xs-center fluid>
    <v-layout row wrap>
      <v-flex xs4>
        <v-card dark >
         <v-card-title primary-title class="justify-center" >
           <div>
             <div class="headline text-xs-center">To Do</div>
           </div>
         </v-card-title>
         <v-divider light></v-divider>
         <v-layout row wrap class="justify-center">
           <v-flex xs10 mb-2>
             <card/>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>

    </v-layout>
  </v-container>
  </div>
</template>

<script>
import toolbar from '@/components/toolBar.vue'
import card from '@/components/card.vue'
export default {
  name: 'general',
  components: {
    toolbar,
    card
  },
  data: () => ({
    currentPage: 'General'
  })
}
</script>

<style scoped>

</style>
