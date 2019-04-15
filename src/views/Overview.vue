<template>
  <div>
    <v-container grid-list-md text-xs-center fluid>
    <v-layout row wrap>
      <column v-bind:proj="toDo" title="To Do"/>
      <column title="Doing"/>
      <column title="Under Review"/>
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
    }
  }
}
</script>

<style scoped>

</style>
