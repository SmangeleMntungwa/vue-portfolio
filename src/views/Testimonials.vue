<template >
    <div>
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
            <div  class="carousel-inner">
              <div v-for="(test, index) in tesimonials" :key="index" class="carousel-item" :class="{active : isActive === index }" >
                <img :src="test.imgURL" class="d-block"
                  style="border-radius: 50%; width: 150px; height: 150px; margin: 60px auto 30px; object-fit: cover;"
                  alt="A picture of my work">
                <div class="testimonial-content" style="color: black;">
                  <h5>{{test.Name}}</h5>
                  <p>{{test. testimony}}</p>
                  <span>{{ test. occupation }}</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section> 
    </div>
</template>
<script>
export default {
      data(){
    return{
     tesimonials:[
      {
 Name:"Jason Wandrag",
 testimony:"Smangele is doing well for her abilities. I love the effort she puts forth whenever she participates during my lessons. She usually seems to be quite cheerful in class. She is always challenging herself to write difficult ideas that are advanced for her level to challenge her coding skills. I'm always happy seeing Smangele develop as a software developer, and I hope she continues to work hard.",
 occupation:"Lecturer",
  imgURL: "https://i.postimg.cc/dt2wc4vt/Jason1.png",
  
},

{
 Name:"Carla Amy",
 testimony:"Being a classmate of Ms Mntungwa has been a pleasure. She combines hard work and focus with genuine warmth and friendliness. Her coding skills have grown tremendously since we have taken this class.",
 occupation:"Student",
  imgURL: "https://i.postimg.cc/9Mwxms5R/carla-snap.png",
  
},

{
 Name:"Mziyanda",
 testimony:"A true monolith Someone you can depend on to be your side. Smangele is kind and caring she is a person that thinks on her feet and works hard to find a solution to the problem.I highly recommend her for any opportunities within your organisation.",
 occupation:"Student",
  imgURL: "https://i.postimg.cc/BvL5HDhR/mzi-snap.png",
  
},

{
 Name:"Sean Collard",
 testimony:"Smangele has shown me nothing but strength and honesty throughout our time together. I believe every organisation needs people that work on themselves time to time so they can be the best at what they do, and Smangele is just that person.",
 occupation:"Life Coach",
  imgURL: "https://i.postimg.cc/yxz9WvGY/collard.jpg",
  
},

{
 Name:"Godwin Dzvapatsva",
 testimony:"Smangele has a pleasant personality and the ability to work in a team environment. She is one of our top performers in database design and development. She is meticulous and always submits her projects on time. I have no hesitation in recommending her.",
 occupation:"Head of Curriculum and Learning",
  imgURL: "https://i.postimg.cc/k5nrCmsT/Godwin-min.jpg",
  
},

{
 Name:"Siyolise",
 testimony:"Smangele is a kind-hearted, humble and  person. She is outspoken and does not shy away from taking on leading positions. Her resourcefulness and well-rounded knowledge makes her a valuable person to have around.",
 occupation:"Student",
  imgURL: "https://i.postimg.cc/T3Sgd1R0/siyo-snap.png",
  
}
     ],
     isActive:0,
    }
    },
    computed:{
    getTestimonails(){
     this.$store.state.tesimonials
    }
    }
}
</script>
<style >
    
</style>