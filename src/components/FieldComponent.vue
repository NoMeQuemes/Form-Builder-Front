<!-- El componente FieldComponent se encarga de la logica
    para mostrar los campos dinámicos según su tipo. -->
<template>
    <div >
      <label>{{ field.label }}</label>
      <input v-if="field.type === 'text'" type="text" :placeholder="field.placeholder" v-model="field.value">
      <select v-else-if="field.type === 'select'" v-model="field.value">
        <option v-for="option in field.options" :value="option">{{ option }}</option>
      </select>
      <input v-else-if="field.type === 'checkbox'" type="checkbox" v-model="field.value">
      <!-- Agrega más condiciones para otros tipos de campos -->
    </div>
  </template>
  
  <script>
  export default {
    props: ['field']
  };
  </script>
  