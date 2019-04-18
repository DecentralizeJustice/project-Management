<template>
  <div>
    <v-container grid-list-md text-xs-center fluid>
    <v-layout row wrap>
      <column v-bind:proj="toDo" title="To Do"/>
      <column v-bind:proj="doing" title="Doing"/>
      <!-- <column v-bind:proj="review" title="Under Review"/> -->
    </v-layout>
  </v-container>
  </div>
</template>

<script>
import column from '@/components/column.vue'
import task from '@/assets/task.js'
export default {
  name: 'overview',
  components: {
    column
  },
  computed: {
    toDo: function () {
      let toDoTask = []
      task.forEach(function (element) {
        if (element.state === 'To Do') {
          toDoTask.push(element)
        }
      })
      return toDoTask
    },
    doing: function () {
      let doingTask = []
      task.forEach(function (element) {
        if (element.state === 'Doing') {
          doingTask.push(element)
        }
      })
      return doingTask
    },
    review: function () {
      let reviewTask = []
      task.forEach(function (element) {
        if (element.state === 'Under Review') {
          reviewTask.push(element)
        }
      })
      return reviewTask
    }
  }
}
</script>

<style scoped>

</style>
