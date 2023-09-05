<!-- El componente FieldComponent se encarga de la logica
    para mostrar los campos dinámicos según su tipo. -->
<template>
    <div class="form-group"> <!-- aqui podemos agregar clases de bootstrap para definir estilos -->
      <label style="margin-right: 10px;">{{ field.label }}</label>
      <input v-if="field.type === 'text'" type="text" :placeholder="field.placeholder" v-model="field.value" class="form-control">
      <input v-if="field.type === 'textarea'" type="textarea" :placeholder="field.placeholder" v-model="field.value" class="form-control">
      <input v-if="field.type === 'password'" type="password" :placeholder="field.placeholder" v-model="field.value" class="form-control">
      <input v-if="field.type === 'email'" type="email" :placeholder="field.placeholder" v-model="field.value" class="form-control">
      <input v-if="field.type === 'number'" type="number" :placeholder="field.placeholder" v-model="field.value" class="form-control">
      <select v-else-if="field.type === 'select'" v-model="field.value" class="form-control">
        <option v-for="option in field.options" :value="option">{{ option }}</option>
      </select>
      <input v-else-if="field.type === 'checkbox'" type="checkbox" v-model="field.value" class="form-check-input">
      <input v-else-if="field.type === 'submit'" type="submit" value="Guardar" class="btn btn-primary">
      <input v-else-if="field.type === 'reset'" type="reset" class="btn btn-primary">
      <!-- Agrega más condiciones para otros tipos de campos -->
    </div>
  </template>
  
  <script>
  export default {
    props: ['field']
  };
  </script>
  <style scoped>
 input{
  margin-bottom: 5px;
 }
 select{
  margin-bottom: 5px;
 }
</style>