<template>
<LandingPage />
<section>
  <div id="about" style="padding-top:30px;">
    <div class="container aos-init aos-animate" data-aos="fade-up">

      <div class="row">
        <div class="col-xs-12">
          <div class="section-title">
            <h2>About</h2>
            <p style="text-align: justify; padding-top:30px;padding-bottom:10px">I am a self-motivated, energetic individual, a good team player, and an
              analytical thinker. I thrive
              under different circumstances because of my good adaptation ability. I have outstanding interpersonal
              skills and excellent attention to detail, plus I am proficient in the use of technology. I am able to
              multitask, which allows me to work in a fast-paced and demanding environment. I have good experience in
              working with people. </p>
          </div>
        </div>

      </div>


      <div class="row" style="margin-bottom: 175px;">
        <div class="col-lg-4">
          <img src="https://i.postimg.cc/3rztJqzT/matric.jpg" class="img-fluid" alt="">
        </div>
        <div class="col-lg-8 pt-4 pt-lg-0 content">
          <h3>Software Developer</h3>
          <p class="description" style="text-align: justify;">
            I love creativity and expression through art and I have a good eye for
            beautiful things. Not only that, but I love exploring new scenes and experiencing different vibes from
            my day-to-day life. I would say I am an adventurous being, inquisitive in learning new things.
            I am passionate about aesthetics.
          </p>
          <div class="row">
            <div class="col-lg-6">
              <ul>

                <li><i class="fa fa-phone"></i> <strong>Phone:</strong> 083 442 9431 </li>
                <li><i class="fa fa-building"></i> <strong>City:</strong> Cape Town, SA</li>
                <li><i class="fa fa-birthday-cake"></i> <strong>Birthday:</strong> 16 January 1998</li>
              </ul>
            </div>
            <div class="col-lg-6">
              <ul>

                <li><i class="fa fa-envelope"></i><strong> Email:</strong>
                  <span id="email">mangie696@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
          <p style="text-align: justify;">
            I've always been fascinated by how these beautiful and trendy websites were created. I visit a lot of
            fashion and vacation websites and blogs. At some point I wanted to do graphic designing, because I
            believe in the art of innovation and creating. But then I found out about how I can acquire a technical
            skill that can combat all my passions, learning different languages to code and create those websites I've
            always been intrigued by.
          </p>
        </div>
      </div>
      <!-- skill row -->

      <div class="row-title">
        <h2>Skills</h2>
      </div>
      <div class="row skills" style="margin-bottom: 174px; padding-bottom:80px">
        <div class="col-xs-12 col-md-6">
          <p class="text-start">
            HTML
            <span class="float-end">95%</span>
          </p>
          <div class="progress my-2">
            <div class="progress-bar " role="progressbar" style="width: 95%" aria-valuenow="95" aria-valuemin="0"
              aria-valuemax="100"></div>
          </div>

          <p class="text-start">
            CSS
            <span class="float-end">90%</span>
          </p>
          <div class="progress my-2">
            <div class="progress-bar " role="progressbar" style="width: 90%" aria-valuenow="90" aria-valuemin="0"
              aria-valuemax="100"></div>
          </div>

          <p class="text-start">
            VUE
            <span class="float-end">70%</span>
          </p>
          <div class="progress my-2">
            <div class="progress-bar " role="progressbar" style="width: 70%" aria-valuenow="70" aria-valuemin="0"
              aria-valuemax="100"></div>
          </div>

          <p class="text-start">
            NODE
            <span class="float-end">90%</span>
          </p>
          <div class="progress my-2">
            <div class="progress-bar " role="progressbar" style="width: 90%" aria-valuenow="90" aria-valuemin="0"
              aria-valuemax="100"></div>
          </div>

        </div>
        <div class="col-xs-12 col-md-6">

          <p class="text-start">
            JAVASCRIPT
            <span class="float-end">65%</span>
          </p>
          <div class="progress my-2">
            <div class="progress-bar " role="progressbar" style="width: 65%" aria-valuenow="65" aria-valuemin="0"
              aria-valuemax="100"></div>
          </div>


          <p class="text-start">
            BOOTSTRAP
            <span class="float-end">95%</span>
          </p>
          <div class="progress my-2">
            <div class="progress-bar " role="progressbar" style="width: 95%" aria-valuenow="95" aria-valuemin="0"
              aria-valuemax="100"></div>
          </div>

          <p class="text-start">
            MySQL
            <span class="float-end">90%</span>
          </p>
          <div class="progress my-2">
            <div class="progress-bar " role="progressbar" style="width: 90%" aria-valuenow="90" aria-valuemin="0"
              aria-valuemax="100"></div>
          </div>

          

        </div>
      </div>
      
    </div>
  </div>
      <!-- testimonials -->
        <section id="testimonies" style="background:beige; padding-bottom:120px">
        <div class="container">
          <div class="row">
            <h2>My Testimonials</h2>
          </div>
          <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel" style="height:400px; text-align:justify;">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3"
                aria-label="Slide 4"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4"
                aria-label="Slide 5"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5"
                aria-label="Slide 6"></button>
            </div>
            <div  class="carousel-inner" v-if="Testimonies">
              <div class="carousel-item" :class="{active : isActive === index }" v-for="(testimonial, index) in Testimonies" :key="index">
                <img :src="testimonial.image" class="d-block"
                  style="border-radius: 50%; width: 150px; height: 150px; margin: 60px auto 30px; object-fit: cover;"
                  alt="A picture of my work">
                <div class="testimonial-content" style="color: black;">
                  <h5>{{testimonial.name}}</h5>
                  <p>{{testimonial.testimony}}</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
</section>
<ResumePage />
<ProjectPage />
<ContactPage />
</template>

<script>
import LandingPage from "./Landing.vue"
import ResumePage from "./Resume.vue"
import ProjectPage from "./Mywork.vue"
import ContactPage from "./Contactform.vue"

export default {
  components: {
    LandingPage,
    ResumePage,
    ProjectPage,
    ContactPage
  }
}
</script>

<style scoped>
#about{
    background: beige;
    margin-bottom:-175px;
    text-align: justify;
}
.img-fluid {
  flex-direction: column;
  float: inline-start;
  height: 475px;
  max-width: 100%;
}
/* skills*/
.progress-bar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  text-align: center;
  white-space: nowrap;
  background-color: #8c5a99;
  transition: width 0.6s ease;
}
.row-title {
  text-align: center;
  margin-top: -60px;
  padding-bottom: 40px;
  font-family: "Poppins", sans-serif;
}
.progress .skill {
  padding: 10px 0;
  margin: 0 0 6px 0;
  text-transform: uppercase;
  display: block;
  font-weight: 600;
}
.text-start {
  font-size: smaller;
}
.progress {
    display: flex;
    height: 4px;
    overflow: hidden;
    font-size: 0.75rem;
    background-color: rgb(177 99 171 / 51%);}
/* testimonials */
.carousel-caption {
  position: absolute;
  right: 15%;
  bottom: 1.25rem;
  left: 15%;
  padding-top: 5rem;
  padding-bottom: 1.25rem;
  color: rgb(2, 2, 2);
  text-align: center;
  
}
.carousel-indicators [data-bs-target] {
  box-sizing: content-box;
  flex: 0 1 auto;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  cursor: pointer;
  background-color: #8c5a99;
  transition: opacity 0.6s ease;
  margin-bottom: -2rem;
  
}
.testimonial-content {
  margin-bottom: 95px;
}
.carousel .carousel-item {
  text-align: center;
  overflow: hidden;
}
@media only screen and (max-width: 990px) {
  .carousel-indicators {
        margin-bottom: -2rem;
    }
  }
  @media only screen and (max-width: 415px) {
  #testimonies {
        padding-bottom: 250px;
    }
      .carousel-indicators {
        margin-bottom: -4rem;
    }
    #carouselExampleCaptions{height:500px;}
  }
</style>