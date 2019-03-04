<template>
  <v-card class="mt-2" color=green lighten-5>
     <v-img
       src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
       aspect-ratio="2.75"
     ></v-img>

     <v-card-title primary-title class="justify-center">
       <div>
         <h3 class="headline">Kangaroo Valley Safari</h3>
         <div> by Donely </div>
       </div>
     </v-card-title>

     <v-card-actions class="justify-center">
       <v-btn flat color="primary">Explore</v-btn>
       <v-btn flat color="primary">Specification</v-btn>
     </v-card-actions>
   </v-card>
</template>

<script>
export default {
  name: 'card',
  props: {
    Info: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
a{text-decoration: none;
color:white;}
</style>
