<template>
  <nav class="navbar bg-dark navbar-dark">
  <div class="container-fluid">
    <div class="navbar-brand">
      <i class="bi bi-person rounded-pill" style="color: antiquewhite;"></i><!--ajustar icono user-->
      Usuario</div>
    <button v-on:click = "fetch" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <!-- boton activador !!-->
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Inicio</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/formularios" class="nav-link">Gestion de modulos</router-link>
        </li>
        <li v-for="formulario of formularios" :key="formulario.idConfigForm">
  <router-link :to="`/modules/${formulario.idConfigForm}`" class="nav-link">{{ formulario.titulo }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>  
  <router-view/>
</template>
<script>
import axios from "axios"; 

export default{
  name: "App",
  data: function(){ return { formularios:[] } },
  methods:{
    fetch (){
      let result = axios.get("http://localhost:5045/api/ConfigForm/ListaFormulariosMenu")
      .then((respuesta) => {
        this.formularios = respuesta.data.lista
        console.log(respuesta.data.lista);
      })
      .catch(err => {
      console.log(err);
      });
    }
  }
};
</script>
<style>
/*#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
nav {
  padding: 30px;
  text-align: center;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}*/
</style>
