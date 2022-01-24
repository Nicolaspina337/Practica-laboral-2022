<template>
<div class="body">
      <div class="login">
        <form action class="form">
          <h1 class="title">Inicio de sesion</h1>
          <label class="form-label" for="#email">Email:</label>
          <input class="form-input" type="email" id="email" required placeholder="Email">
          <label class="form-label" for="#password">Contraseña</label>
          <input class="form-input" type="password" id="password" placeholder="Contraseña">
          <input class="form-submit" type="submit" value="Ingresar">
        </form>
      </div>        
</div>
</template>

<scripts>
</scripts>

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