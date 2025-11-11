[15:06, 11/11/2025] Ernest: const subastas = [
  {marca:"Porsche", modelo:"Macan S", precio:"45.000", localidad:"Madrid"},
  {marca:"BMW", modelo:"M4 Competition", precio:"56.000", localidad:"Barcelona"},
];
const cards = document.getElementById("cards");
const fechaFooter = document.getElementById("fechaFooter");
fechaFooter.textContent = new Date().toLocaleDateString("es-ES");

function render() {
  cards.innerHTML = '';
  subastas.forEach(a=>{
    const div = document.createElement('div');
    div.className = 'card';
    div.innerHTML = `<h3>${a.marca} ${a.modelo}</h3>
      <p><strong>Precio base:</strong> ${a.precio} €</p>
      <p><strong>Ubicación:</strong> ${a.localidad}</p>`;
    cards.appendChild(div);
  });
}
render();

document.getElementById('listingForm').addEventListener('submit', e=>{
  e.preventDefault();
  alert("Vehículo publicado correctamente (modo demo).");
  e.target.reset();
});
[15:07, 11/11/2025] Ernest: const subastas = [
  {marca:"Porsche", modelo:"Macan S", precio:"45.000", localidad:"Madrid"},
  {marca:"BMW", modelo:"M4 Competition", precio:"56.000", localidad:"Barcelona"},
];
const cards = document.getElementById("cards");
const fechaFooter = document.getElementById("fechaFooter");
fechaFooter.textContent = new Date().toLocaleDateString("es-ES");

function render() {
  cards.innerHTML = '';
  subastas.forEach(a=>{
    const div = document.createElement('div');
    div.className = 'card';
    div.innerHTML = `<h3>${a.marca} ${a.modelo}</h3>
      <p><strong>Precio base:</strong> ${a.precio} €</p>
      <p><strong>Ubicación:</strong> ${a.localidad}</p>`;
    cards.appendChild(div);
  });
}
render();

document.getElementById('listingForm').addEventListener('submit', e=>{
  e.preventDefault();
  alert("Vehículo publicado correctamente (modo demo).");
  e.target.reset();
});
