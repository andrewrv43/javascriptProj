var inputCounter = 5;
var maxInputs = 7;

function agregarInput() {
  if (inputCounter < maxInputs) {
    inputCounter++;

    var inputContainer = document.getElementById('inputContainer');
    var newInput = document.createElement('input');
    newInput.required=true;
    newInput.type = 'text';
    newInput.name = 'Participante' + inputCounter;
    newInput.placeholder = 'Participante ' + inputCounter;

    inputContainer.appendChild(newInput);
    inputContainer.appendChild(document.createElement('br'));
  }
  verificacion();
}

function eliminarInput() {

  if (inputCounter > 5) {
    var inputContainer = document.getElementById('inputContainer');
    var inputs = inputContainer.getElementsByTagName('input');
    var lastInput = inputs[inputs.length - 1];
    inputContainer.removeChild(lastInput);
    inputContainer.removeChild(inputContainer.lastElementChild);
    inputCounter--;
  }
  verificacion();


}
function verificacion(){
  var btnEliminar=document.getElementById('eliminar');
  var btnAgregar=document.getElementById('agregar');
  if(inputCounter===5){
    btnEliminar.style.visibility='hidden';
  }
  else{
    btnEliminar.style.visibility='visible';
  }
  if(inputCounter===7){
    btnAgregar.style.visibility='hidden';
  }
  else{
    btnAgregar.style.visibility='visible';
  }
}
function crearJSON(event) {
    event.preventDefault(); // Evitar el envío del formulario

    var form = document.getElementById('myForm');
    var formData = new FormData(form);
    var jsonData = {};

    for (var pair of formData.entries()) {
      jsonData[pair[0]] = pair[1];
    }

    var jsonDataStr = JSON.stringify(jsonData, null, 2);

    var link = document.createElement('a');
    link.href = 'data:text/json;charset=utf-8,' + encodeURIComponent(jsonDataStr);
    link.download = 'datos.json';
    link.click();
}

function validarFormulario(event) {
  var form = document.getElementById("myForm");
  if (form.checkValidity() === false) {
    event.preventDefault();
    event.stopPropagation();
    console.log("hola");
  }else{
    crearJSON(event);
  }
  return true;
}

window.onload = function() {
  verificacion();
};
