<template>
  <div class="home">
      <div v-for="(project, index) in getProjects" :key="index"> 
          <span>{{project.id}}  {{project.name}}</span>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  computed: {
    getProjects() {
      return this.$store.state.projects
    }
  },
 
}
</script>
