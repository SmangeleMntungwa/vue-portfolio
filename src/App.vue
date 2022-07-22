


<template>
  <Navbar />
  <router-view></router-view>
  <Footer />
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
// import HomeView from 
export default {
components: {
    Navbar,
    Footer
    }
}

</script>



<style>
#app {
  font-family: "poppins", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #8686e0;
  overflow-x: hidden;
}
li {
  list-style: none;
  color: rgb(14, 13, 13);
}
.section-title {
  text-align: center;
  margin-top: 100px;
}
h2 {
  color: rgb(14, 13, 13);
  text-align: center;
  text-transform: uppercase;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  position: relative;
}
h2::after {
  content: "";
  width: 100px;
  position: absolute;
  margin: 0 auto;
  height: 3px;
  background: #a454bc7a;
  left: 0;
  right: 0;
  bottom: -10px;
}
p {
  color: black;
}
</style>
