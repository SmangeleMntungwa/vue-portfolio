<template>
  <section id="home">
    <div class="container">
      <img class="landing" src="https://i.postimg.cc/k49j9RHt/black-and-white.jpg" alt="" />
      <h3 style="text-shadow: 2px 2px #262626f0">Hello, I'm</h3>
      <h1>S M A N G E L E</h1>
      <h4 style="text-shadow: 2px 2px #262626f0">
        Aspiring Software Developer.
      </h4>
    </div>
    <div class="header-social-links">
      <a
        data-toggle="tooltip"
        title="instagram"
        href="https://www.instagram.com/mangie_mntungwa/"
        target="_blank"
        class="fa fa-instagram"
      ></a>
      <a
        data-toggle="tooltip"
        title="linkedin"
        href=""
        target="_blank"
        class="fa fa-linkedin"
      ></a>
      <a
        data-toggle="tooltip"
        title="github"
        href=""
        target="_blank"
        class="fa fa-github"
      ></a>
    </div>
    <br /><br />
    <a class="btn btn button rounded-pill" href="#about">EXPLORE</a>
    <a class="btn btn button rounded-pill" href="#contact">LET'S CONNECT</a>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.landing {
  height: 200px;
  width: 200px;
  border-radius: 50%;
  margin-top: 230px;
  border: 8px double #8686e098;
}
#home {
  min-height: 100vh;
  background: linear-gradient(
      0deg,
      rgba(243, 247, 193, 0.294),
      rgba(44, 44, 44, 0.6)
    ),
    url("https://i.postimg.cc/TYPzLV5T/josh-calabrese-XXpbd-U-31-Sg-unsplash.jpg"); 
  background-size: cover;
  background-repeat: no-repeat;
}
#home h1 {
  font-size: 45px;
  color: transparent !important;
  -webkit-text-stroke: 2px beige;
  background: url("https://i.postimg.cc/k49j9RHt/black-and-white.jpg");
  -webkit-background-clip: text;
  background-position: 0 0;
  animation: back 20s linear infinite;
}
@keyframes back {
  100% {
    background-position: 2000px 0;
  }
}
/* social media btns */
.fa-instagram {
  background-color: #8686e0;
  color: beige;
  border-radius: 50%;
}
.fa-github {
  background-color: #8686e0;
  color: beige;
  border-radius: 50%;
}
.fa-linkedin {
  background-color: #8686e0;
  color: beige;
  border-radius: 50%;
}
.header-social-links .fa {
  display: inline-block;
  justify-content: space-around;
  list-style: none;
  margin: 15px 25px;
  padding: 10px;
  justify-content: end !important;
  text-decoration: none;
}
.social-links .fa {
  display: inline-block;
  justify-content: space-around;
  list-style: none;
  margin: 0 15px;
  padding: 10px;
}
.fa:hover {
  color: rgba(66, 22, 77, 0.699);
  border-bottom: none;
  list-style: none;
  
}
/* home buttons */
.button {
  border: none;
  color: rgb(8, 8, 8);
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 40px;
  cursor: pointer;
  width: 210px;
  background-color: #8686e098 !important;
}
.button a {
  text-decoration: none;
  color: rgb(8, 8, 8);
  font-size: small;
  transform: scale(1.5s);
}
.button:hover {
  background-color: rgba(245, 245, 220, 0.664) !important;
  color: #000;
}
.button:hover a {
  color: #000;
  transform: scale(1.5);
}
@media only screen and (min-width: 480px) {
  .button {
    margin-bottom: 30px;
  }
}
</style>