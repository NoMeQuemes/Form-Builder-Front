<template>
  <div id="contenedor-padre">
    <div>
      <!-- Formulario para agregar campos al formulario -->
      <div class="col-3">
        <div class="col-auto"><!-- Grupo tipo de campo -->
          <label for="field-type" style="margin-right: 10px;">Tipo de Campo:</label>
          <select id="field-type" class="form-select">
            <option value="text">Texto</option>
            <option value="textarea">Área de Texto</option>
            <option value="select">Select</option>
            <option value="password">Contraseña</option>
            <option value="email">Email</option>
            <option value="number">Numero</option>
            <option value="checkbox">Casilla de verificacion</option>
            <option value="submit">Boton de guardar</option>
            <option value="reset">Boton de resetear</option>

          </select>
        </div>
        <div class="col-auto" id="etiqueta-group"><!--Grupo etiqueta-->
          <label for="field-label" style="margin-right: 10px;" class="form-label">Etiqueta del Campo:</label>
          <input type="text" id="field-label" v-model="label" class="form-control">
        </div>
        <div class="col-auto" id="requerido-group"><!-- Grupo requerido -->
          <label for="field-required" style="margin-right: 10px;" class="form-check-label">Requerido:</label>
          <input type="checkbox" id="field-required" v-model="required" class="form-check-input">
        </div>
        <div class="col-auto" id="placeholder-group"><!-- Grupo placeholder -->
          <label for="field-placeholder" style="margin-right: 10px;" class="form-label">Placeholder:</label>
          <input type="text" id="field-placeholder" v-model="placeholder" class="form-control">
        </div>
      </div>
      <!-- Submit -->
      <br>
      <!-- Grupo etiqueta para grupos de campos
    <input type="text" id="group-name" placeholder="Nombre del grupo">
    <button onclick="addGroup()">Add group</button>
    -->
      <button @click="addField" class="btn btn-primary">Agregar campo</button>
    </div>
    <br>
    <div id="form-builder">
      <field-component v-for="(field, index) in formFields" :key="index" :field="field" />
    </div>
    <!-- Los campos se agregarán aquí -->

    <br>
    <button @click="showFormData" class="btn btn-primary">Enviar a consola</button><!--Envia las propiedades de los campos a la consola-->
  </div>
</template>
<script>
//import Sortable from 'sortable.js'//corregir
import FieldComponent from '../components/FieldComponent.vue'; // Importa el componente
export default {
  components: {
    FieldComponent // Registra el componente
  },
  data() {
    return {
      formFields: [],
      label: '',
      type: 'text',
      required: false,
      placeholder: '',
    };
  },
  mounted() {
    const formBuilder = document.getElementById('form-builder');
    /*new Sortable(formBuilder,{
      animation:150,
      handle:'label',
      onEnd: this.updateFormFieldsOrder,
    });*/
  },
  methods: {


    addField() {
      const label = document.getElementById('field-label').value;
      const type = document.getElementById('field-type').value;
      const required = document.getElementById('field-required').checked;
      const placeholder = document.getElementById('field-placeholder').value;

      let options; // Declaramos la variable aquí



      if (type === 'select') {
        const selectOptions = prompt('Ingrese opciones del select (separadas por coma)');
        if (!selectOptions) return; // Si no hay opciones, no agregar el campo
        options = selectOptions.split(','); // Asignamos el valor a la variable
        this.formFields.push({ label, type, required, placeholder, options });
      } else {
        this.formFields.push({ label, type, required, placeholder });

      }
    },
    updateFormFieldsOrder() {
      const updatedFields = [];
      const fieldElements = formBuilder.querySelectorAll('div');
      fieldElements.forEach(element => {
        const label = element.querySelector('label').textContent;
        const type = element.querySelector('input, select').tagName.toLowerCase();
        const required = element.querySelector('input, select').hasAttribute('required');
        const placeholder = element.querySelector('input, select').getAttribute('placeholder');
        const options = [];
        if (type === 'select') {
          const selectElement = element.querySelector('select');
          const optionElements = selectElement.querySelectorAll('option');
          optionElements.forEach(option => {
            options.push(option.textContent);
          });
        }
        updatedFields.push({ label, type, required, placeholder, options });
      });

      this.formFields.length = 0;
      this.formFields.push(...updatedFields);
    },
    showFormData() {
      console.log('Campos del Formulario:');
      this.formFields.forEach((field, index) => {
        console.log(`Campo ${index + 1}`);
        console.log('  Etiqueta:', field.label);
        console.log('  Tipo:', field.type);
        console.log('  Requerido:', field.required);
        console.log('  Marcador de posición:', field.placeholder);
        if (field.type === 'select') {
          console.log('  Opciones:', field.options.join(', '));
        }
      });

    },
  },
};
</script>
<style scoped>
#form-builder {
  min-height: 280px;
  border: 2px dashed #ccc;
  padding: 40px;
}

#contenedor-padre {
  margin: 20px;
}
</style>