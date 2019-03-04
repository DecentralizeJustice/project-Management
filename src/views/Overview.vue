<template>
  <div>
    <v-container grid-list-md text-xs-center fluid>
    <v-layout row wrap>
      <v-flex md4 xs12>
        <v-card dark >
         <v-card-title primary-title class="justify-center" >
           <div>
             <div class="headline text-xs-center">To Do</div>
           </div>
         </v-card-title>
         <v-divider light></v-divider>
         <v-layout row wrap class="justify-center">
           <v-flex xs10 mb-2 >
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
import card from '@/components/card.vue'
export default {
  name: 'overview',
  components: {
    card
  },
  data: () => ({

  })
}
</script>

<style scoped>

</style>
