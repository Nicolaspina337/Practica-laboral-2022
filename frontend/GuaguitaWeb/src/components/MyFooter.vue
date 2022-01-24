<template>

<footer>
   <div class="content">
     <div class="left box">
       <div class="upper">
         <div class="topic">
          <img src="../assets/logo_guaguita.png">
         </div>
         <p>Tienda de ropa para bebes, donde encontraras enteritos, pijamas, vestidos y todo lo que buscas para tu bebe 😉</p>
       </div>
       <div class="lower">
         <div class="topic">Contactanos</div>
         <div class="phone">
           <a href="#"><i class="fas fa-phone-volume"></i>(800) 123-456</a>
         </div>
         <div class="email">
           <a href="#"><i class="fas fa-envelope"></i>info@babysitter.com</a>
         </div>
       </div>
     </div>
     <div class="middle box">
       <div class="topic">Otros servicios</div>
       <div><a href="#">Mis pedidos</a></div>
       <div><a href="#">Mis datos</a></div>
       <div><a href="#">Mis direcciones</a></div>
       <div><router-link to="/contactos">Ayuda y contactos</router-link></div>
       <div><a href="#">Politica de privacidad</a></div>
       <div><router-link to="/despachos">Despachos</router-link></div>
     </div>
     <div class="right box">
       <div class="topic">Recibe nuestras promociones</div>
       <form action="#">
         <input type="text" placeholder="Tu email">
         <input type="submit" name="" value="subscribirse">
       </form>
     </div>
   </div>
   <div class="bottom">
     <p>© 2021 Mi Guagüita, Todos los derechos reservado</p>
   </div>
 </footer>

</template>

<scripts>
</scripts>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Jua&family=Montserrat:ital,wght@0,400;1,700&display=swap');

img{
    width: 500px;
}

footer{
  min-height: 70px;
  border-top: 1px solid rgba(50, 50, 50, 0.3);
  width: 100%;
  /*position: relative;
  clear: both;             
  margin-top: 0px;            ELIMINADO
  padding-top: 0px;
  overflow: visible;*/
  bottom: 0;         
}
footer .content{
  max-width: 1350px;
  margin: auto;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
footer .content p,a{
  color: black;
  font-size: 24px;
  font-family: 'Jua', sans-serif;
}
footer .content .box{
  width: 33%;
  transition: all 0.4s ease;
}
footer .content .topic{
  font-size: 20px;
  font-weight: 600;
  color: black;
  margin-bottom: 16px;

}
footer .content p{
  text-align: justify;
  font-family: 'Jua', sans-serif;
  font-size: 24px;
}
footer .content .lower .topic{
  margin: 24px 0 5px 0;
}
footer .content .lower i{
  padding-right: 16px;
}
footer .content .middle{
  padding-left: 80px;
}
footer .content .middle a{
  line-height: 32px;
}
footer .content .right input[type="text"]{
  height: 45px;
  width: 100%;
  outline: none;
  color: black;
  background-color: #e3f2fd;;
  border-radius: 5px;
  padding-left: 10px;
  font-size: 17px;
  border: 2px solid #222222;
}
footer .content .right input[type="submit"]{
  height: 42px;
  width: 100%;
  font-size: 18px;
  color: white;
  background-color: #ff6f96;
  outline: none;
  border-radius: 5px;
  letter-spacing: 1px;
  cursor: pointer;
  margin-top: 12px;
  border: 2px solid #ff6f96;
  transition: all 0.3s ease-in-out;
}
.content .right input[type="submit"]:hover{
  background: none;
  color:  black;
}
footer .content .media-icons a{
  font-size: 13px;
  height: 45px;
  width: 45px;
  display: inline-block;
  text-align: center;
  line-height: 43px;
  border-radius: 5px;
  border: 2px solid #222222;
  margin: 30px 5px 0 0;
  transition: all 0.3s ease;
}
.content .media-icons a:hover{
  border-color: #eb2f06;
}
footer .bottom{
  width: 100%;
  text-align: right;
  color: #d9d9d9;
  padding: 0 40px 5px 0;
}
footer .bottom a{
  color: #eb2f06;
}
footer a{
  transition: all 0.3s ease;
}
footer a:hover{
  color: #eb2f06;
}
.fa-facebook {
  background: #3B5998;
  color: white;
}

@media (max-width:1100px) {
  footer .content .middle{
    padding-left: 50px;
  }
}
@media (max-width:950px){
  footer .content .box{
    width: 50%;
  }
  .content .right{
    margin-top: 40px;
  }
}
@media (max-width:560px){
  footer{
    position: relative;
  }
  footer .content .box{
    width: 100%;
    margin-top: 30px;
  }
  footer .content .middle{
    padding-left: 0;
  }
}


</style>