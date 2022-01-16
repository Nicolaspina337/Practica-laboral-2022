<template>
<div class="body">

  <div class="p-2 text-center h-200" id="header">
    <img src="../assets/logo_guaguita.png" width="700px" style="display:block; margin:auto;">
    <img src="../assets/h1_logo_G.png" width="500px" style="display:block; margin:auto;">
  </div>

<div class="row">
  <div class="main">
    <div class="fakeimg">
      <router-link to="/nino">
        <img src="../assets/Imagen_ninoP.jpg" style="display:inline; margin:auto; border-radius: 10px;">
      </router-link>
    </div>
    <p class="subtitulos">Seccion para niños</p>
    <p>Desde Bodys para niños de 3 a 9 meses, hasta trajecitos para galas y viajes 👕</p>
    <br>
    <div class="fakeimg">
      <router-link to="/nina">
        <img src="../assets/Imagen_ninaP.jpg" style="display:inline; margin:auto; border-radius: 10px;">
      </router-link>
    </div>
      <div style="margin-top:25px">
        <p class="subtitulos">Seccion para niñas</p>
        <p>Vestidos de distintos colores, jardineras, y entre otros para el gusto de tu bebe 👗</p>
      </div>
      <div style="margin-top:140px">
        <p class="subtitulos">Productos destacados 🌟</p>
        <p>Estos son los productos mas destacados en nuestra tienda!!!</p>
      </div>
  </div>
</div>

<div class="row2"> 
  <div class="column">
    <img src="../ropa_nino/Conjunto_camuflaje.jpg" style="width:100%">
    <p>Conjunto camuflaje 🎖️</p>
    <img src="../ropa_nino/Enterito_rayas.jpg" style="width:100%">
    <p>Enterito mi leoncito 🦁</p>
    <img src="../ropa_nina/Conjunto puntitos.jpg" style="width:100%">
    <p>Conjunto puntitos ⚫</p>
  </div>
  
  <div class="column">
    <img src="../ropa_nino/Conjunto_nubes.jpg" style="width:100%">
    <p>Conjunto nubes ☁️</p>
    <img src="../ropa_nino/Enterito_lunar.jpg" style="width:100%">
    <p>Enterito lunar🌛</p>
    <img src="../ropa_nina/Vestido cerezas.jpg" style="width:100%">
    <p>Vestido cerezas 🍒</p>
  </div> 
   
  <div class="column">
    <img src="../ropa_nino/Elefante_estampado.jpg" style="width:100%">
    <p>Enterito elefante 🐘</p>
    <img src="../ropa_nina/Conjunto conejito.jpg" style="width:100%">
    <p>Conjunto conejito 🐇</p>
    <img src="../ropa_nina/Enterito rojo floral.jpg" style="width:100%">
    <p>Enterito rojo floral 🌹</p>
  </div>
  
  <div class="column">
    <img src="../ropa_nino/Enterito_zorrito.jpg" style="width:100%">
    <p>Enterito zorrito 🦊</p>
    <img src="../ropa_nina/Conjunto floral.jpg" style="width:100%">
    <p>Conjunto floral 🌼</p>
    <img src="../ropa_nina/Enterito flores amarillas.jpg" style="width:100%">
    <p>Enterito flores amarillas 🌻</p>
    <br>
  </div>
</div>

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
       <div><a href="#">Ayuda y contacto</a></div>
       <div><a href="#">Politica de privacidad</a></div>
       <div><a href="#">Despachos</a></div>
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

</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Jua&family=Montserrat:ital,wght@0,400;1,700&display=swap');

.body{
  margin: 0; 
  padding: 0;
  padding: 15px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

#header{
  background-image: url(../assets/fondo_header.jpg);
  margin-top: 10px;
  height: 100%;
}

.row {  
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
}
/* Main column */
.main {
  flex: 70%;
  background-color: white;
  padding: 20px;
}

.fakeimg {
  width: 100%;
  padding: 15px;
}
p{
  font-family: 'Jua', sans-serif;
  font-size: 28px;
}

.subtitulos{
  color: #33C7FF;
}
.row2 {
  display: flex;
  flex-wrap: wrap;;
  padding: 0 20px;
}
.column img {
  margin-top: 8px;
  vertical-align: middle;
  border-radius: 10px;
}
.column {
  flex: 25%;
  max-width: 25%;
  padding: 0 15px;
  margin: 0 0 6px;
}
.logo_footer{
  padding: 15px;
  margin-left: 30px;
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

@media (max-width: 800px) {
  .column {
    flex: 100%;
    max-width: 50%;
  }
}
@media (max-width: 600px) {
  .column {
    flex: 100%;
    max-width: 100%;
  }
}
@media screen and (max-width: 700px) {
  .row {   
    flex-direction: column;
  }
}
</style>
