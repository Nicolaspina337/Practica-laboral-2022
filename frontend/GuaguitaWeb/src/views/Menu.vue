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
    <p class="subtitulos">Seccion para niños 🧑</p>
    <p>Desde Bodys para niños de 3 a 12 meses, hasta trajecitos para eventos y viajes 👕</p>
    <br>
    <div class="fakeimg">
      <router-link to="/nina">
        <img src="../assets/Imagen_ninaP.jpg" style="display:inline; margin:auto; border-radius: 10px;">
      </router-link>
    </div>
      <div style="margin-top:25px">
        <p class="subtitulos">Seccion para niñas  👩 </p>
        <p>Vestidos de distintos colores, jardineras, y entre otros para el gusto de tu bebe 👗</p>
      </div>
      <div style="margin-top:140px">
        <p class="Titulo">Productos destacados 🌟</p>
        <p>Estos son los productos mas destacados en nuestra tienda!!!</p>
      </div>
  </div>
</div>

<div class="row2"> 
  <div class="column">
    <img src="../ropa_nino/Conjunto_camuflaje.jpg" style="width:100%">
    <p>Conjunto camuflaje🎖️<br> $12.990</p>
    <img src="../ropa_nino/Enterito_rayas.jpg" style="width:100%">
    <p>Enterito leoncito🦁<br>$11.990</p>
    <img src="../ropa_nina/Conjunto puntitos.jpg" style="width:100%">
    <p>Conjunto puntitos ⚫<br>$11.990</p>
  </div>
  
  <div class="column">
    <img src="../ropa_nino/Conjunto_nubes.jpg" style="width:100%">
    <p>Conjunto nubes ☁️ <br> $12.990</p>
    <img src="../ropa_nino/Enterito_lunar.jpg" style="width:100%">
    <p>Enterito lunar🌛<br>$9.990</p>
    <img src="../ropa_nina/Vestido cerezas.jpg" style="width:100%">
    <p>Vestido cerezas 🍒<br>$11.990</p>
  </div> 
   
  <div class="column">
    <img src="../ropa_nino/Elefante_estampado.jpg" style="width:100%">
    <p>Enterito elefante 🐘 <br> $9.990</p>
    <img src="../ropa_nina/Conjunto conejito.jpg" style="width:100%">
    <p>Conjunto conejito 🐇<br>$13.990</p>
    <img src="../ropa_nina/Enterito rojo floral.jpg" style="width:100%">
    <p>Enterito rojo floral 🌹<br>$7.990</p>
  </div>
  
  <div class="column">
    <img src="../ropa_nino/Enterito_zorrito.jpg" style="width:100%">
    <p>Enterito zorrito 🦊 <br> $11.990</p>
    <img src="../ropa_nina/Conjunto floral.jpg" style="width:100%">
    <p>Conjunto floral 🌼<br>$11.990</p>
    <img src="../ropa_nina/Enterito flores amarillas.jpg" style="width:100%">
    <p>Enterito flores amarillas 🌻<br> $8.990</p>
    <br>
  </div>
</div>

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

.Titulo{
  color: #33C7FF;
  font-size: 48px;
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
