<template>
<div class="body">

<div class="mt-8">
  <p class="subtitulos">Seccion para niños</p>
    <p>Los mejores trajecitos y conjuntos 👕</p>
</div>

<div class="row2"> 
  <div class="column">
    <img src="../ropa_nino/Conjunto_camuflaje.jpg" style="width:100%">
    <p>Conjunto camuflaje🎖️<br> $12.990</p>
    <img src="../ropa_nino/Enterito_rayas.jpg" style="width:100%">
    <p>Enterito leoncito🦁<br>$11.990</p>
    <img src="../ropa_nino/Enterito osito.jpg" style="width:100%">
    <p>Enterito osito ⚫<br>$14.990</p>
  </div>
  
  <div class="column">
    <img src="../ropa_nino/Conjunto_nubes.jpg" style="width:100%">
    <p>Conjunto nubes ☁️ <br> $12.990</p>
    <img src="../ropa_nino/Enterito_lunar.jpg" style="width:100%">
    <p>Enterito lunar🌛<br>$9.990</p>
    <img src="../ropa_nino/Jardinera estrellas.jpg" style="width:100%">
    <p>Jardinera estrellas ✨ <br>$11.990</p>
  </div> 
   
  <div class="column">
    <img src="../ropa_nino/Elefante_estampado.jpg" style="width:100%">
    <p>Enterito elefante 🐘 <br> $9.990</p>
    <img src="../ropa_nino/Jardinera soldaditos.jpg" style="width:100%">
    <p>Jardinera soldaditos 💂<br>$11.990</p>
    <img src="../ropa_nino/Enterito bigotes.jpg" style="width:100%">
    <p>Enterito bigotes  👨 <br>$10.990</p>
  </div>
  
  <div class="column">
    <img src="../ropa_nino/Enterito_zorrito.jpg" style="width:100%">
    <p>Enterito zorrito 🦊 <br> $11.990</p>
    <img src="../ropa_nino/Jardinera te amo mami.jpg" style="width:100%">
    <p>Jardinera te amo mami ❤️<br>$11.990</p>
    <img src="../ropa_nino/Jardinera leoncito.jpg" style="width:100%">
    <p>Jardinera leoncito  🦁<br> $11.990</p>
    <br>
  </div>
</div>

  <div class="pagina_sig">
    <button type="button" class="btn bg-pink-500">
    <a href="#" class="previous">&laquo; Previous</a>
    </button>
    <button type="button" class="btn bg-blue-400">
    <a href="#" class="next">Next &raquo;</a>
    </button>
  </div>

</div>
</template>

<scripts>
</scripts>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Jua&family=Montserrat:ital,wght@0,400;1,700&display=swap');

.body{
  margin: 0; 
  padding: 0;
  padding: 14px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}
p{
  font-family: 'Jua', sans-serif;
  font-size: 28px;
}
.subtitulos{
  color: #33C7FF;
  font-size: 48px;
}
.row2 {
  display: flex;
  flex-wrap: wrap;;
  padding: 0 45px;
  margin-top: 30px;
}
.column img {
  margin-top: 8px;
  vertical-align: middle;
  border-radius: 10px;
  margin-top: 30px;
}
.column {
  flex: 25%;
  max-width: 25%;
  padding: 0 15px;
  margin: 0 0 6px;
}

a:hover {
  color: white;
}

.previous {
  color: white;
}

.next {
  color: white;
}

.pagina_sig{
  text-decoration: none;
  display: inline-block;
  padding: 8px 20px;
  font-family: 'Jua', sans-serif;
}

@media (max-width: 800px) {
  .column {
    flex: 50%;
    max-width: 77%;
  }
}
@media (max-width: 600px) {
  .column {
    flex: 100%;
    max-width: 100%;
  }
}
@media screen and (max-width: 700px) {
  .row2 {   
    flex-direction: column;
  }
}


</style>