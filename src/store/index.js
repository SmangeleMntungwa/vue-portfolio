import { createStore } from 'vuex'

export default createStore({
  state: {
    projects: [
      {
        id: 1,
        img: "https://i.postimg.cc/kg4VMBcH/calculator.png",
        name: "Calculator",
        title: "I created this Calculator with HTML,Bootstrap and CSS",
        github: "https://github.com/SmangeleMntungwa/SmangeleMntungwa/blob/main/Calculator",
        netlify: "https://ephemeral-cat-f05bb4.netlify.app/"
      },
      

     
      {
        id:2,
        img:"https://i.postimg.cc/tJrLyqph/temp-scale.jpg" ,
        name:"Temperature Converter",
        title:"I used Javascript, CSS and HTML to create this Temperature Converter",
        github:"https://github.com/SmangeleMntungwa/Convert_Calculator",
        netlify:"https://gleeful-wisp-a092ae.netlify.app/"
      },

      
      {
        id: 3,
        img: "https://i.postimg.cc/G2W3kxZB/BMI.jpg",
        name:"BMI Calculator",
        title:"I created this BMI Calculator using HTML, CSS and Javascript",
        github:"https://github.com/SmangeleMntungwa/BMI-CALCULATOR",
        netlify:"https://delicate-hotteok-0dfbe4.netlify.app/"
      },

      {
        id: 4,
        img: "https://i.postimg.cc/GtvywVbx/apartment2.jpg",
        name:"Real Estate",
        title:"I created this Real Estate Application using HTML, CSS, Javascript",
        github:"https://github.com/SmangeleMntungwa/Homes",
        netlify:"https://relaxed-crumble-19622c.netlify.app/"
      },

    ],

tesimonials: [

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
  imgURL: "https://i.postimg.cc/1tKqb98y/Carla-2.jpg",
  
},

{
 Name:"Mziyanda",
 testimony:"A true monolith Someone you can depend on to be your side. Smangele is kind and caring she is a person that thinks on her feet and works hard to find a solution to the problem.I highly recommend her for any opportunities within your organisation.",
 occupation:"Student",
  imgURL: "https://i.postimg.cc/tC2v6xNN/Mziyanda-3.jpg",
  
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
  imgURL: "https://i.postimg.cc/TwWgdpRx/Siyolise-1.jpg",
  
}



],



  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
