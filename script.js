let tasas = {};
let monedas = [];

fetch('tasas.json')
  .then(response => response.json())
  .then(data => {
    tasas = data;
    monedas = Object.keys(tasas);
    cargarOpciones();
  });

function cargarOpciones() {
  const selectDe = document.getElementById('de');
  const selectA = document.getElementById('a');

  monedas.forEach(moneda => {
    let option1 = document.createElement('option');
    option1.value = moneda;
    option1.textContent = moneda;
    selectDe.appendChild(option1);

    let option2 = document.createElement('option');
    option2.value = moneda;
    option2.textContent = moneda;
    selectA.appendChild(option2);
  });

  selectDe.value = "USD";
  selectA.value = "CLP";
}

function convertir() {
  const cantidad = parseFloat(document.getElementById('cantidad').value);
  const de = document.getElementById('de').value;
  const a = document.getElementById('a').value;

  if (isNaN(cantidad)) {
    document.getElementById('resultado').innerText = "Por favor, ingrese un número válido.";
    return;
  }

  const tasa = tasas[de][a];
  const resultado = cantidad * tasa;

  document.getElementById('resultado').innerText = `${cantidad} ${de} = ${resultado.toFixed(2)} ${a}`;
}