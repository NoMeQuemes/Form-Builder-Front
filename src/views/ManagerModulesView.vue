<template>
  <div>

  </div>
</template>
<script>
export default {
  name: 'ManagerModulesView',
  mounted() {
    // Accede al idConfigForm de la URL
    const idConfigForm = this.$route.params.idConfigForm;
    
    // Ahora se puede utilizar el idConfigForm
    console.log('ID del formulario:', idConfigForm);
    
    // Se puede realizar una solicitud HTTP utilizando este ID
    // axios.get(`http://localhost:5045/api/ConfigForm/ObtenerFormulario/${idConfigForm}`)
    //   .then(response => {
    //     // Manejar la respuesta
    //   })
    //   .catch(error => {
    //     // Manejar el error
    //   });
  },
};

</script>