<template>
  <div class="container">
    <form>
      <div class="form-group">
      <div v-for="formulario of daform" :key="formulario.idConfigForm">
        <p class="text-center">{{ formulario.titulo }}</p>
        <p class="text-center">{{ formulario.descripcion }}</p>
      </div> 
      <div v-for="campos of dafield" :key="campos.id_Field">
      <label :for="campos.nombre">{{ campos.etiqueta }}</label>
      <input :type="campos.tipo" :placeholder="campos.marcador" 
      :class="campos.clase" :name="campos.nombre" :required="campos.requerido">
      </div>
      </div>
      <div class="row">
        <div class="col  p-3 text-center"> <button type="submit" class="btn btn-primary"> Submit </button> </div>
        <div class="col  p-3 text-center"> <button type="reset" class="btn btn-primary" >  Reset  </button> </div>
     </div>
      
    </form>
  </div>
</template>
<script>
import axios from "axios"; 
export default {
  name: 'ManagerModulesView',
  data: function(){
    return { daform: [], dafield:[] }
  
  },
  created(){
    this.fetch();
  },
  methods:{
    fetch (){
    const idConfigForm = this.$route.params.idConfigForm;

      axios.get(`http://localhost:5045/api/ConfigForm/MostrarFormularioCompleto/${idConfigForm}`)
      .then((respuesta) => {
        this.daform = respuesta.data;
        this.dafield = respuesta.data.datosField;
        console.log(respuesta.data);
      })
      .catch(err => {
      console.log(err);
      });
    }
  },
};

</script>