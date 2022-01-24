<template>
<div class="body">
      <div class="login">
        <form action class="form">
          <h1 class="title">Contactanos</h1>
          <label class="form-label" for="#text">Ingresa tu nombre:</label>
          <input class="form-input" type="text" id="email" required placeholder="Nombre:" v-model="nombre">
          <label class="form-label" for="#email">Email:</label>
          <input class="form-input" type="email" id="email" required placeholder="Email" v-model="correo">
          <label class="form-label" for="exampleFormControlTextarea1">Motivo de contacto:</label>
          <textarea class="form-input" name="w3review" rows="4" cols="50" placeholder="Escribe tu mensaje, duda, reclamo, etc.." v-model="descripcion">
          </textarea>
          <input class="form-submit" type="submit" value="Ingresar" @click="ingresar()">
        </form>
      </div>        
</div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      nombre: "",
      correo: "",
      descripcion: ""
    };
  },
  mounted() {
    console.log("montado");
  },
  computed: {

  },
  methods: {
    Ingresar() {
      if (this.esValido()) {
        axios
          .post("/api/contactos/add", {
            nombre: this.nombre,
            correo: this.correo,
            descripcion: this.descripcion,
          })
          .then(respuesta => {
            alert("Solicitud registrada");
          })
          .catch((error) => {
            alert(error);
          });
      } else {
        console.log("Su solicitud no se pudo enviar");
      }
    },
    esValido() {
      if (this.nombre.trim().length <= 0) {
        alert("Debe ingresar su nombre");
        return false;
      }
      return true;
    },
        esValido() {
      if (this.correo.trim().length <= 0) {
        alert("Debe ingresar su correo");
        return false;
      }
      return true;
    },
        esValido() {
      if (this.descripcion.trim().length <= 0) {
        alert("Debe ingresar el motivo de su solicitud");
        return false;
      }
      return true;
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Jua&family=Montserrat:ital,wght@0,400;1,700&display=swap');
.login {
  padding-top: 1rem;
}
.title {
  text-align: center;
}
h1{
  font-family: 'Jua', sans-serif;
  font-size: 28px;
}
.form {
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40%;
  min-width: 350px;
  max-width: 100%;
  background-color: #9ad8d3;
  border-radius: 5px;
  padding: 40px;
  box-shadow: 0 4px 10px 4px rgba(0, 0, 0, 0.3);
}
.form-label {
  margin-top: 2rem;
  color: white;
  margin-bottom: 0.5rem;
  &:first-of-type {
    margin-top: 0rem;
  text-align:;
  }
}
.form-input {
  padding: 10px 15px;
  background: #72cbc4;
  background-image: none;
  border: 1px solid white;
  color: white;
  &:focus {
    outline: 0;
  border-color: #1ab188;
  }
}

.form-submit {
  background: #1ab188;
  border: none;
  color: white;
  margin-top: 3rem;
  padding: 1rem 0;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #0b9185;
  }
}

input{
  border-radius: 10px;
}
</style>