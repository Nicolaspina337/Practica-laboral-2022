<template>
<div class="body">
    <div class="row">
    <div class="side">
        <h2><router-link to="/menu" style=" color: #ff6f96;">Menu</router-link> > Mi cuenta</h2>
        <br>
        <br>
        <div class="fakeimg" style="height:60px;"><router-link to="./menuser">Escritorio</router-link></div><br>
        <div class="fakeimg" style="height:60px;"><router-link to="/pedidos">Pedidos</router-link></div><br>
        <div class="fakeimg" style="height:60px;"><router-link to="./direcciones">Direcciones</router-link></div><br>
        <div class="fakeimg" style="height:60px;"><router-link to="/login">Cierre de sesion</router-link></div>
    </div>
    <div class="main">
        <h2 style="font-size: 25px;">Bienvenido</h2>
        <br>
        <div style="height:200px; font-size: 20px;">
            Desde el panel de control de tu cuenta puedes ver tus pedidos recientes, gestionar tus direcciones de envío y entre otros.
        </div>
    </div>
    </div>
</div>
</template>

<script>
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Jua&family=Montserrat:ital,wght@0,400;1,700&display=swap');
/* Style the body */
.body{
  margin: 0; 
  padding: 15px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

/* Header/logo Title */
.header {
  padding: 60px;
  text-align: center;
  background: #1abc9c;
  color: white;
}

/* Style the top navigation bar */
.navbar {
  display: flex;
  background-color: #333;
}

/* Style the navigation bar links */
.navbar a {
  color: white;
  padding: 14px 20px;
  text-decoration: none;
  text-align: center;
}

/* Change color on hover */
.navbar a:hover {
  background-color: #ddd;
  color: black;
}

/* Column container */
.row {  
  display: flex;
  flex-wrap: wrap;
}

/* Create two unequal columns that sits next to each other */
/* Sidebar/left column */
.side {
  flex: 30%;
  padding: 15px;
}

/* Main column */
.main {
  flex: 70%;
  background-color: white;
  padding: 20px;
}

/* Fake image, just for this example */
.fakeimg {
  width: 100%;
  padding: 20px;
  font-family: 'Jua', sans-serif;
  font-size: 20px;
  color: #ff6f96;
}

/* Footer */
.footer {
  padding: 20px;
  text-align: center;
  background: #ddd;
}
h2{
     font-family: 'Jua', sans-serif;
    font-size: 23px;
}

@media screen and (max-width: 700px) {
  .row {   
    flex-direction: column;
  }
}
</style>