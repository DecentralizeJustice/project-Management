<template>
  <div id="app">
    <v-app dark>
      <v-content>
        <toolbar/>
        <transition  name="fade"
        mode="out-in">
          <router-view></router-view>
        </transition>
    </v-content>
  </v-app>
 </div>
</template>

<script>
import toolbar from '@/components/toolBar.vue'
export default {
  name: 'App',
  components: {
    toolbar
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
/* Full height */
height: 100%;
width:100%;

/* Center and scale the image nicely */
background-position: center;
background-repeat: no-repeat;
background-size: cover;
}
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>
