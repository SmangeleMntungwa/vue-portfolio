<template>
  <section id="contact" style="padding-top: 30px">
  <div class="contact-box">
    <div class="contact-links">
      <h2>CONTACT</h2>
    <div class="social-links" style="margin-top: 65px;">
        <a href="https://www.instagram.com/mangie_mntungwa/" target="_blank" class="fa fa-instagram"></a>
        <a href="https://www.linkedin.com/in/s-mangele-mangie-b17b921b0/" target="_blank" class="fa fa-linkedin"></a>
        <a href="https://github.com/SmangeleMntungwa" target="_blank" class="fa fa-github"></a>
      </div>
    </div>
    <div class="contact-form-wrapper">
      <form action="https://formspree.io/f/mgedgzol" method="POST">
        <div class="form-item">
          <input type="text" name="sender" required>
          <label>Name:</label>
        </div>
        <div class="form-item">
          <input type="text" name="email" required>
          <label>Email:</label>
        </div>
        <div class="form-item">
          <textarea class="" name="message" required></textarea>
          <label>Message:</label>
        </div>
        <button type="submit" class="submit-btn">Send</button>  
      </form>
    </div>
  </div>
</section>
</template>

<script>
export default {
}
</script>

<style scoped>
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
  
}
.social-links .fa {
  display: inline-block;
  justify-content: space-around;
  list-style: none;
  margin: 0 15px;
  padding: 10px;
  justify-content: end !important;
  text-decoration: none;
}
.fa:hover {
  color: rgba(66, 22, 77, 0.699);
}
/*  */
#contact {
  background-color: #dcc2ec7a;
  display: flex;
  justify-content: center;
  align-items: center;
}
.contact-box {
  width: clamp(100px, 90%, 1000px);
  margin: 80px 50px;
  display: flex;
  flex-wrap: wrap;
}
.contact-links, .contact-form-wrapper {
  width: 50%;
  padding: 8% 5% 10% 5%;
}
.contact-links {
  background-color: beige;
  background:
    radial-gradient(
      circle at 55% 92%, rgb(140, 90, 153) 0 12%, transparent 12.2%
    ), 
    radial-gradient(
      circle at 94% 72%, rgb(140, 90, 153) 0 10%, transparent 10.2%
    ), 
    radial-gradient(
      circle at 20% max(78%, 350px), #dcc2ec7a 0 7%, transparent 7.2%
    ), 
    radial-gradient(
      circle at 0% 0%, #dcc2ec7a 0 40%, transparent 40.2%
    ), 
    beige;
  border-radius: 10px 0 0 10px;
}
.contact-form-wrapper {
  background-color: #ffffff8f;
  border-radius: 0 10px 10px 0;
}
@media only screen and (max-width: 800px) {
  .contact-links, .contact-form-wrapper {
    width: 100%;
  }
  
  .contact-links {
    border-radius: 10px 10px 0 0;
  }
  
  .contact-form-wrapper {
    border-radius: 0 0 10px 10px;
  }
}
@media only screen and (max-width: 400px) {
  .contact-box {
    width: 95%;
    margin: 8% 5%;
  }
}
h2 {
  font-family: 'Arimo', sans-serif;
  color: #000;
  font-size: clamp(30px, 6vw, 60px);
  letter-spacing: 2px;
  text-align: center;
  transform: scale(.95, 1);
}
.form-item {
  position: relative;
}
label, input, textarea {
  font-family: 'Poppins', sans-serif;
}
label {
  position: absolute;
  top: 10px;
  left: 2%;
  color: #999;
  font-size: clamp(14px, 1.5vw, 18px);
  pointer-events: none;
  user-select: none;
}
input, textarea {
  width: 100%;
  outline: 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 20px;
  padding: 12px;
  font-size: clamp(15px, 1.5vw, 18px);
}
input:focus+label, 
input:valid+label, 
textarea:focus+label, 
textarea:valid+label {
  font-size: clamp(13px, 1.3vw, 16px);
  color: #777;
  top: -20px;
  transition: all .225s ease;
}
.submit-btn {
  background-color: #8686e098;
  filter: drop-shadow(2px 2px 3px #0003);
  color: #fff;
  font-family: "Poppins",sans-serif;
  font-size: clamp(16px, 1.6vw, 18px);
  display: block;
  padding: 12px 20px;
  margin: 2px auto;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  user-select: none;
  transition: 0.2s;
}
.submit-btn:hover {
  transform: scale(1.1, 1.1);
}
.submit-btn:active {
  transform: scale(1.1, 1.1);
  filter: sepia(0.5);
}
@media only screen and (max-width: 800px) {
  h2 {
    font-size: clamp(40px, 10vw, 60px);
  }
}
@media only screen and (max-width: 400px) {
  h2 {
    font-size: clamp(30px, 12vw, 60px);
  }
  
}
</style>