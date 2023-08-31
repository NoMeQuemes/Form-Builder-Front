<template>
 <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/gestionModulos">Gestion de modulos</router-link>|
  </nav>-->
  <nav class="navbar bg-dark navbar-dark">
  <div class="container-fluid">
    <div class="navbar-brand">
      <i class="bi bi-person rounded-pill" style="color: antiquewhite;"></i><!--ajustar icono user-->
      Usuario</div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Inicio</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/gestionModulos" class="nav-link">Gestion de modulos</router-link>
        </li>
        <li>
          <p class="nav-link">Modulos creados</p><!--configurar-->
        </li>
      </ul>
    </div>
  </div>
</nav>  
  <router-view/>
</template>

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
