<template>
<section >
  <div class="container py-5">
    <div class="row justify-content-center mb-3">
      <div class="col-md-20 col-xl-30">
        <div class="card shadow-0 border rounded-3">
          <div class="card-body">
            <div class="row">
              <div class="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                <div class="bg-image hover-zoom ripple rounded ripple-surface">
                   <img src="../ropa_nino/Conjunto_camuflaje.jpg" style="width:100%">
                  <a href="#!">
                    <div class="hover-overlay">
                      <div
                        class="mask"
                        style="background-color: rgba(253, 253, 253, 0.15);"
                      ></div>
                    </div>
                  </a>
                </div>
              </div>
              <div class="col-md-6 col-lg-6 col-xl-6">
                <h5>Conjunto camuflaje 🎖️</h5>
                <div class="mt-1 mb-0 text-muted small">
                <br>
                  <span>SKU: MGHC10002</span> <br>
                  <span class="text-primary"> • </span>
                  <span> Categoría: Niño</span> <br>
                  <br>
                  <span>Etiquetas: body, camuflaje, conjunto, gorro, militar, pantalon</span>
                </div>
                <br>
                <p class="text-truncate mb-4 mb-md-0">
                 Hermoso conjunto, diseño camuflaje, logo con motivo militar.
                </p>
                <br>
                        
        <form class="form" >
            <h1>Cantidad</h1>
            <input type="number" class="custom-select mr-sm-2" placeholder=" Cantidad" min="1" max="15"/>
             <h1>Talla</h1>
                <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                    <option selected>Seleccione..</option>
                    <option value="1">3 a 6 meses</option>
                    <option value="2">6 a 12 meses</option>
                    <option value="3">12 a 18 meses</option>
                </select>
        </form>
              
            </div>
              <br>
              <div class="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
               <br>
                <h6 class="text-success">$12.990</h6>
                <div class="d-flex flex-column mt-6">
                 <button type="button" class="btn btn-primary btn-lg">Añadir al Carrito</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
</section>


</template>

<script>
</script>

<style scoped>
h5{
    font-size: 24px;
}
h6{
    font-size: 24px;
}
.form{
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 }

.form input{
  width: 50%;
  height: 36px;
  margin: .7rem;
  border: black 0.5px solid;
}
.form select{
  width: 50%;
  height: 36px;
  margin: .7rem;
  border: black 0.5px solid;
}

.form button{
  padding: .5em 1em;
  border:none;
  background: rgb(100,200,255);
  cursor: pointer;
}

.form-container{
  max-width:700px;
  margin: 0 auto;
}

.form-element {
  display: block;
  width: 80%;
  margin: 1rem auto;
  
}

</style>