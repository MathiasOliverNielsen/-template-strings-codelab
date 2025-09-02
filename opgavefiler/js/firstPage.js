/* Opgave 1*/

// din kode her
const navn = 'Keld';
const aar = 3;
const besked = `<h2>Hej ${navn}</h2> du har nu arbejdet i vores virksomhed i ${aar} år.`;
document.getElementById('message').innerHTML = besked;

/* Opgave 2*/

// din kode her
const myData = [
  { navn: 'T-shirt', beskrivelse: 'En t-shirt lavet af bomuld', pris: 99 },
  { navn: 'Jeans', beskrivelse: 'Blå denim jeans med straight fit', pris: 299 },
  { navn: 'Hættetrøje', beskrivelse: 'En grå hættetrøje med lynlås', pris: 200 },
];
//Not needed
if (!document.getElementById('produktListe')) {
  const produktListe = document.createElement('div');
  produktListe.id = 'produktListe';
  document.body.appendChild(produktListe);
}
const produktListe = document.getElementById('produktListe');
let html = '';
myData.forEach((produkt) => {
  html += `<div class="produkt">
    <h3>${produkt.navn}</h3>
    <p>${produkt.beskrivelse}</p>
    <p>Pris: ${produkt.pris} kr.</p>
  </div>`;
});
produktListe.innerHTML = html;

/* Opgave 3 - skriv videre på koden her: */

// array med person data
const myPersons = [];

// find form elementer
const myForm = document.getElementById('formular');
const submitButton = document.getElementById('indsend-knap');
const personList = document.getElementById('person-liste');

// submit button event listener
submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  const myFormFelter = myForm.querySelectorAll('input');

  // Tilføj person til array
  myPersons.push({
    navn: myFormFelter[0].value,
    alder: Number(myFormFelter[1].value),
  });

  // Sorter listen efter alder og vis den på siden
  const sorteretMyPersons = sorterEfterAlder(myPersons);
  showList(sorteretMyPersons);
});

// Funktion til at vise listen
function showList(sorteretMyPersons) {
  let html = '';
  sorteretMyPersons.forEach((person) => {
    html += `<li>${person.navn} er ${person.alder} år gammel.</li>`;
  });
  personList.innerHTML = html;
}

// Funktion til at sortere listen efter alder
function sorterEfterAlder(myPersons) {
  return myPersons.sort((a, b) => a.alder - b.alder);
}
