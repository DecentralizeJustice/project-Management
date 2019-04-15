<template>

      <v-flex md4 xs12>
        <v-card dark >
         <v-card-title primary-title class="justify-center" >
           <div>
             <div class="headline text-xs-center">{{title}}</div>
           </div>
         </v-card-title>
         <v-divider light></v-divider>
         <v-layout row wrap class="justify-center">
           <v-flex xs10 mb-2 style="min-height:25vh;">
             <card v-for="item in proj" :propObj="item" :key="item.id"/>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>

</template>

<script>
import card from '@/components/card.vue'
export default {
  name: 'column',
  props: ['proj', 'title'],
  components: {
    card
  }
}
</script>

<style scoped>

</style>
