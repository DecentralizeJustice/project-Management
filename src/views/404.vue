<template>
  <div>
    <v-container grid-list-md text-xs-center fluid>
  <v-layout row wrap>
    <v-flex xs12 sm6 offset-sm3>
          <v-card>
            <v-card-title primary-title class="justify-center">
              <div>
                <h3 class="headline mb-0">Page Not Found</h3>
              </div>
            </v-card-title>
            <v-divider light></v-divider>
            <video width="100%" height="100%" autoplay muted loop>
              <source src="https://media.giphy.com/media/9J7tdYltWyXIY/giphy.mp4" type="video/mp4">

            </video>

          </v-card>
        </v-flex>
  </v-layout>
  </v-container>
  </div>
</template>

<script>
export default {
  name: 'randd',
  components: {

  },
  data: () => ({

  })
}
</script>

<style scoped>

</style>
