<template>
<div class="body">

<div class="mt-8">
  <p class="subtitulos">Seccion para niñas</p>
    <p>Los mejores vestidos y jardineras para tu hija 👗</p>
</div>

<div class="row2"> 
  <div class="column">
    <img src="../ropa_nina/Enterito gatuno.jpg" style="width:100%">
    <p>Enterito gatuno 🐈<br> $12.990</p>
    <img src="../ropa_nina/Conjunto floreado lila.jpg" style="width:100%">
    <p>Conjunto lila 💜<br>$8.990</p>
    <img src="../ropa_nina/Conjunto puntitos.jpg" style="width:100%">
    <p>Conjunto puntitos ⚫<br>$11.990</p>
  </div>
  
  <div class="column">
    <img src="../ropa_nina/Vestido cute.jpg" style="width:100%">
    <p>Vestido cute 😊 <br> $9.990</p>
    <img src="../ropa_nina/Conjunto rosado frutilla.jpg" style="width:100%">
    <p>Conjunto frutilla 🍓<br>$9.990</p>
    <img src="../ropa_nina/Vestido cerezas.jpg" style="width:100%">
    <p>Vestido cerezas 🍒<br>$11.990</p>
  </div> 
   
  <div class="column">
    <img src="../ropa_nina/Vestido puntitos.jpg" style="width:100%">
    <p>Vestido puntitos⚫ <br> $15.990</p>
    <img src="../ropa_nina/Conjunto conejito.jpg" style="width:100%">
    <p>Conjunto conejito 🐇<br>$13.990</p>
    <img src="../ropa_nina/Enterito rojo floral.jpg" style="width:100%">
    <p>Enterito rojo floral 🌹<br>$7.990</p>
  </div>
  
  <div class="column">
    <img src="../ropa_nina/Conjunto mariposas.jpg" style="width:100%">
    <p>Conjunto mariposas 🦊<br> $19.990</p>
    <img src="../ropa_nina/Conjunto floral.jpg" style="width:100%">
    <p>Conjunto floral 🌼<br>$11.990</p>
    <img src="../ropa_nina/Enterito flores amarillas.jpg" style="width:100%">
    <p>Enterito flores amarillas 🌻<br> $8.990</p>
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
  color: #F000CE;
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
.pagina_sig{
  text-decoration: none;
  display: inline-block;
  padding: 8px 20px;
  font-family: 'Jua', sans-serif;
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

@media (max-width: 800px) {
  .column {
    flex: 50%;
    max-width: 90%;
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