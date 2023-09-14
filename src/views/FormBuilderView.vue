<template>
  <div id="contenedor-padre">
    <div>
      <!-- Formulario para agregar campos al formulario -->
      <div class="row g-3">
        <div class="col-auto"><!-- Grupo tipo de campo -->
          <label for="field-type" style="margin-right: 10px;">Tipo de Campo:</label>
          <select id="field-type">
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
          <label for="field-label" style="margin-right: 10px;" id="etiqueta-group-label">Etiqueta del Campo:</label>
          <input type="text" id="field-label" v-model="label">
        </div>
        <div class="col-auto" id="requerido-group"><!-- Grupo requerido -->
          <label for="field-required" style="margin-right: 10px;">Requerido:</label>
          <input type="checkbox" id="field-required" v-model="required">
        </div>
        <div class="col-auto" id="placeholder-group"><!-- Grupo placeholder -->
          <label for="field-placeholder" style="margin-right: 10px;">Placeholder:</label>
          <input type="text" id="field-placeholder" v-model="placeholder">
        </div>
      </div>
      <!-- Submit -->
      <br>
      <!-- Grupo etiqueta para grupos de campos
    <input type="text" id="group-name" placeholder="Nombre del grupo">
    <button onclick="addGroup()">Add group</button>
    -->
      <button @click="addField">Agregar campo</button>
    </div>
    <br>
    <!-- Los campos se agregarán aquí -->
    <div id="form-builder">
      <div v-for="(field, index) in formFields" :key="index">
        <div class="row" align-items-center>
          <div class="col">
            <field-component :field="field" />
          </div>
          <div class="col-3 col-md-1" style="margin: 0 auto; padding: 0;">
            <div>
              <!-- boton de arrastrar -->
              <span class="draggable-handle">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" fill="currentColor"
                  class="bi bi-arrows-move" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M7.646.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 1.707V5.5a.5.5 0 
        0 1-1 0V1.707L6.354 2.854a.5.5 0 1 1-.708-.708l2-2zM8 10a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 
        0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 14.293V10.5A.5.5 0 0 1 8 10zM.146 8.354a.5.5 
        0 0 1 0-.708l2-2a.5.5 0 1 1 .708.708L1.707 7.5H5.5a.5.5 0 0 1 0 1H1.707l1.147 1.146a.5.5 0 
        0 1-.708.708l-2-2zM10 8a.5.5 0 0 1 .5-.5h3.793l-1.147-1.146a.5.5 0 0 1 .708-.708l2 2a.5.5 0 0 1 
        0 .708l-2 2a.5.5 0 0 1-.708-.708L14.293 8.5H10.5A.5.5 0 0 1 10 8z" />
                </svg>
              </span>
            </div>
            <br>
            <div>
              <!-- boton de eliminar -->
              <span @click="deleteFields(index)"> <!-- funcion de eliminar -->
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                  class="bi bi-x-square-fill" viewBox="0 0 16 16">
                  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 
  2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 
  0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 
  0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z" />
                </svg>
              </span>
            </div>
            <br>
          </div>

        </div>
      </div>
    </div>

    <br>
    <button @click="showFormData">Enviar a consola</button><!--Envia las propiedades de los campos a la consola-->
  </div>
</template>
<script>
import Sortable from 'sortablejs'//corregir
import { ref } from 'vue';
import FieldComponent from '../components/FieldComponent.vue'; // Importa el componente
export default {
  components: {
    FieldComponent// Registra el componente
  },
  data() {
    return {
      formFields: [],
      formBuilder: null,
      label: '',
      type: 'text',
      required: false,
      placeholder: '',
    };
  },
  mounted() {
    this.formBuilder = document.getElementById('form-builder'); // Asigna el elemento a formBuilder
    new Sortable(this.formBuilder, {
      animation: 150,
      handle: '.draggable-handle',
      onEnd: this.probar,
    });
  },
  methods: {
    probar() {
      console.log("prueba1");
      //funcion que reordene los campos
    },

    EliminarCampoVistaPrevia() { console.log("eliminar") },

    //Actualizar form builder segun el tipo de campo seleccionado
    miSelect: addEventListener('change', function () {
      const miSelect = document.getElementById('field-type');
      const $grupoPlaceholder = document.getElementById('placeholder-group');
      const $grupoEtiqueta = document.getElementById('etiqueta-group');
      const $grupoRequerido = document.getElementById('requerido-group');
      let opcionSeleccionada = miSelect.value;
      if (opcionSeleccionada === 'select' || opcionSeleccionada === 'checkbox'
        || opcionSeleccionada === 'submit' || opcionSeleccionada === 'reset') {
        $grupoPlaceholder.style.display = "none";
        if (opcionSeleccionada === 'submit' || opcionSeleccionada === 'reset') {
          $grupoEtiqueta.style.display = "none";
          $grupoRequerido.style.display = "none";
        }
      } else {
        $grupoPlaceholder.style.display = "block";
        $grupoEtiqueta.style.display = "block";
        $grupoRequerido.style.display = "block";
      }
    }),
    //    ARREGLO QUE GUARDA LOS ELEMENTOS
    addField() {
      let label = document.getElementById('field-label').value;
      let type = document.getElementById('field-type').value;
      let required = document.getElementById('field-required').checked;
      let placeholder = document.getElementById('field-placeholder').value;
      let options; // Declaramos la variable aquí




      if (type === 'select') {
        const selectOptions = prompt('Ingrese opciones del select (separadas por coma)');
        if (!selectOptions) return; // Si no hay opciones, no agregar el campo
        options = selectOptions.split(','); // Asignamos el valor a la variable
        this.formFields.push({ label, type, required, placeholder, options });
        placeholder = '';
      } else {
        this.formFields.push({ label, type, required, placeholder });

      }
      //resetear formulario de crear campos
      this.label = '';
      this.type = 'text';
      this.required = false;
      this.placeholder = '';
    },



    //FUncion que reordena los campos luego al final del sortable
    updateFormFieldsOrder() {
      if (!this.formBuilder) {
        console.error('formBuilder is not defined'); // Manejo de errores si formBuilder no está definido
        return;
      }
      const updatedFields = [];
      const fieldElements = this.formBuilder.querySelectorAll('div');
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

      // Muestra el estado final de formFields después de actualizar
      console.log(this.formFields);
    },

    // Función que elimina los campos del lienzo

    deleteFields(index){
      this.formFields.splice(index,1);
    },

    //Funcion que envia los datos a la consola
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