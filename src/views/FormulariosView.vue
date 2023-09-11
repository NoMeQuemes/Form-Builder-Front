<template>
      <div class="container">
        <div class="row">
            <div class="col">
                <h6 class="text-center">Listado de formularios</h6>
            </div>
        </div>
        <div class="row">
            <div class="col"><router-link to="/gestionModulos" class="btn btn-primary" >Nuevo</router-link></div>
            <div class="col"><span class="text-right">Filter</span></div>
        </div>
            <div>
                <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Titulo del formulario</th>
      <th scope="col">Descripcion</th>
      <th scope="col">Operaciones</th>
    </tr>
  </thead>
  <tbody v-for="Listaform of ListaFormularios" :key="Listaform.idConfigForm">
    <tr>
      <th scope="row">{{Listaform.idConfigForm}}</th>
      <td> {{ Listaform.titulo }} </td>
      <td> {{ Listaform.descripcion }} </td>
      <td>
        <div class="row g-2">
            <div class="col-6">
                <button class="btn btn-warning p-2 border" v-on:click="asd" >Editar</button>
            </div>
            <div class="col-6">    
                <button class="btn btn-danger p-2 border" v-on:click="eliminarform(Listaform.idConfigForm)">Eliminar</button>
            </div>
        </div>
      </td>
    </tr>
  </tbody>
</table>
            </div>
        </div>
</template>
<script>
import axios from "axios";
export default{
    name: "Formularios",
    data: function () {
      return {ListaFormularios:[]}
    }, 
    created(){
        this.fetch();
    },
    methods:{
        fetch (){
      let result = axios.get("http://localhost:5045/api/ConfigForm/ListaFormulariosCRUD")
      .then((respuesta) => {
        this.ListaFormularios = respuesta.data.lista
      })
      .catch(err => {
      console.log(err);
      });
    },

    eliminarform(idConfigForm){
        var enviar = {
            "IdConfigForm" : idConfigForm
        }
        axios.put(`http://localhost:5045/api/ConfigForm/EliminarModulo/${idConfigForm}`)
        .then(datos=>{
           console.log(datos);
           this.makeToast();
           this.fetch();
        });
    },
    //Alerts
    makeToast(variant = null) {
        this.$bvToast.toast('Toast body content', {
          title: `Variant ${variant || 'default'}`,
          variant: variant,
          solid: true
        })
      }


    }
}
</script>
<style></style>