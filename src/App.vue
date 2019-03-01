<template>
  <div id="app">
    <v-app dark>
      <v-content>
        <router-view/>
    </v-content>
  </v-app>
 </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style>
#app{
background: url('https://images.pexels.com/photos/994883/pexels-photo-994883.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')
no-repeat center center fixed;
}
</style>
