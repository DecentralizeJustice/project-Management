<template>
  <v-card class="mt-2" color=green lighten-5>

     <v-card-title primary-title class="justify-center">
       <div>
         <h3 class="headline">{{propObj.title}}</h3>

       </div>
     </v-card-title>
     <div class="subheading"> by {{propObj.author}} </div>
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

    propObj: { type: Object, required: true }
  }
}
</script>

<style scoped>
a{text-decoration: none;
color:white;}
</style>
