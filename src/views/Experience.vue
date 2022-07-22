<template>

<section id="experience" class="experience" style="padding-top:30px;">
    <div class="container" >
      <div class="section-title">
        <h2>Experience</h2>
        <p >Innovative and deadline-driven person with 2+ years of experience of working with people.</p>
      </div>
    </div>

    <div v-for="(resume,index) in resumes" :key="index" >
        <h1>{{ resume.title }}</h1>
        <span>{{ resume.date }}</span>
        <p>{{ resume.company }}</p>
        <ul>
            <li>{{ resume.dutie1 }}</li>
            <li>{{ resume.dutie2 }}</li>
            <li>{{ resume.dutie3 }}</li>
        </ul>
    </div>
</section>
</template>
<script>
export default {
    data() {
        return{

            resumes: [
                {
                    date:"2016-2018",
                    title:"ASSISTANT CHEF",
                    company:"ZISUBUHLE CATERINGS",
                    dutie1:"I took care of the logistical parts of the business and dealt with customers.",
                    dutie2:"I learnt to think on my feet, how to be patient and meet the customers needs.",
                    duties3:"",
                },{
                    date:"2019-2020",
                    title:"TEAM LEADER",
                    company:"Fun World Events",
                    dutie1:"Prepared ticket stations and kids playing stations",
                    dutie2:"Help kids on the games and how to conduct themselves around others, maintain a safe, secure, and clean environment.",
                },{
                    date:"2021",
                    title:"TAXI DRIVER",
                    company:"Ta-Soja Tours",
                    dutie1:"Resolve customer complaints/enquiries.",
                    dutie2:"Took care of the business WhatsApp, updating daily information",
                    dutie3:"Paying attention to the smallest details.",

}
            ]
        }
    }
}
</script>
<style>
    .experience {
  background: #f7efd3;
  padding: 0 0 30px 20px;
  margin-top: 0px;
  border-left: 2px solid #8c5a99;
  position: relative;
  
}

</style>