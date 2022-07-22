<template>
  <section id="projects" class="project" style="padding-top: 30px">
    <div class="setion-title" style="margin-top: 120px">
      <h2>MY PROJECTS</h2>
    </div>


    <div class="container mx-auto mt-4" >
<!--   card  -->
<div class="row" style="margin-bottom: 100px" v-if="projects">
  <div  v-for="(project, index) in getProjects" :key="index" class="card-body">
    <div class="content-img">
      <img :src="project.img" />
    </div>
    <div class="card-text">
      <p class="tag">My Work</p>
      <h2>{{ project.name }}</h2>
      <p class="text">{{ project.title }}</p>
      <div class="read-more">
          <a data-toggle="tooltip"
        title="view project code" target="blank" class="read-more" :href="project.github"
                    ><span class="iconify" data-icon="ant-design:github-filled"></span>
                  </a>
                
                  <a data-toggle="tooltip"
        title="view live project" target="blank" class="read-more" :href="project.netlify">
                    <span class="iconify" data-icon="bxl:netlify"></span>
                  </a>
      </div>
    </div>
  </div>
</div>
</div>

  </section>
</template>

<script>
export default {
  name: 'HomeView',
  data(){
    return{
      projects:[

      ]
      }
    },
  computed: {
    getProjects() {
      return this.$store.state.projects
    }
  }
  }



</script>

<style scoped>
.container{
  display: flex;
    align-items: center;
    flex-direction: column;
  min-height: 100vh;
  margin: 0 auto 75px;
  width: 85%;
}
.project {
  background-color: #a454bc3f;
  padding-bottom: 1px;
}
.card-body{
  background-color: #FFFFFF;
  box-shadow: 0px 0px 30px 10px rgba(0,0,0,0.2);
  margin: 25px 0;
  min-height: 515px;
  overflow: hidden;
  width: 100%;
}
@media (min-width:768px){
  .container{
    flex-direction: row;
    flex-wrap: wrap;
  }
  .card-body{
    margin: 25px 10px;
    width: 45%;
  }
}
@media (min-width:1024px){
  .card-body{
    margin: 25px 15px;
    width: 30%;
  }
}
.content-img{
  border-bottom: 4px solid #a454bc7a;
  height: 200px;
  overflow: hidden;
}
.card-body img{
  width: 100%;
}
.card-body .card-text{
  display: flex;
    align-items: center;
    flex-direction: column;
  min-height: 315px;
}
@media (min-width:768px){
  .card-body .card-text{
    padding-bottom: 25px;
  }
}
@media (min-width:1024px){
  .card-body .card-text{
    margin-top: 25px;
    min-height: 250px;
    padding-bottom: 0;
  }
}
.card-text p.tag{
  font-size: .75rem;
  color: #898989;
  letter-spacing: 3px;
  margin-top: 5.5vh;
  text-transform: uppercase;
}
@media (min-width:1024px){
  .card-text p.tag{
    margin-top: 3.5vh;
  }
}
.card-text h2{
  font-size: 1.75rem;
  margin-top: 25px;
}
.card-text p.text{
  font-size: .95rem;
  margin: 20px auto;
  text-align: center;
  width: 85%;
}
.card-text a.read-more{
  border: 2px solid #a454bc7a;;
  border-radius: 25px;
  color: #a454bca7;;
  cursor: pointer;
  font-size: .85rem;
  font-weight: bold;
  margin-top: 15px;
  padding: 7.5px 25px;
  margin: 0 7px;
  transition: all .5s ease;
}
.card-text a.read-more:hover{
  background-color:#a454bc7a;
  color: #FFFFFF;
  transform: scale(1.15)
}
</style>