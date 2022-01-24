<template>
<nav class="navbar navbar-expand-lg navbar-light fixed-top" style="background-color: #e3f2fd;">
<div class="container">
<a class="navbar-brand" href="#"><img src="https://www.miguaguita.cl/wp-content/uploads/2021/01/logo-mi-guaguita.png"></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active text-blue-800">
        <a class="nav-link" href="#">
        <router-link to="/Menu">
          🏠 Menu
        </router-link>
        <span class="sr-only">(current)</span>
        </a>
      </li>
      <li class="nav-item dropdown text-blue-800">
        <a class="nav-link" href="#">
        <router-link to="/nino">
          👕 Niño
        </router-link>
        <span class="sr-only">(current)</span>
        </a>
      </li>
       <li class="nav-item text-blue-800">
        <a class="nav-link" href="#">
          <router-link to="/nina">
            👗 Niña
          </router-link>
        </a>
      </li>
      <li class="nav-item text-blue-800">
        <a class="nav-link" href="#">
          <router-link to="/login">
            📋 Mi cuenta
          </router-link>
        </a>
      </li>
      <li class="nav-item text-blue-800">
        <a class="nav-link" href="#">
          <router-link to="#">
            🛒 Carrito
          </router-link>
        </a>
      </li>
       <li class="nav-item text-blue-800">
          <a class="nav-link disabled" href="#">
          <p>ESTA ES UNA PAGINA DE PRUEBA!!!</p>
          </a>
      </li>
    </ul>
       <form class="d-flex input-group w-auto">
        <input
          type="search"
          class="form-control"
          placeholder="Buscar"
          aria-label="Search"
        />
        <button
          class="btn btn-outline-primary"
          type="button"
          data-mdb-ripple-color="dark">
          Buscar
        </button>
      </form>
      
      </div>
    </div>
  </nav>
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

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Jua&family=Montserrat:ital,wght@0,400;1,700&display=swap');

nav{
  padding: 15px 20px 15px;
  margin: auto;
  background: red;
}

img{
  height: 37px;
}

ul{
  width: auto;
  height: 100%;
  font-size: 17px;
  font-family: 'Jua', sans-serif;
}

a{
  color: rgba(30, 64, 175, var(--tw-text-opacity));
}

</style>
