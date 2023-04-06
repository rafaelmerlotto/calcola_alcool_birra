const form = document.querySelector('.form');
const risultato = document.querySelector('.risultato');

function calcolo(event){
    event.preventDefault();
    const og = form.querySelector('.og').value;
    const fg = form.querySelector('.fg').value;
    const somma = (og - fg) / 7.5 + 0.5 ;
    console.log(somma.toFixed(1))
    risultato.innerHTML = `<p>La tua birra avrà ${somma.toFixed(1)}% di alcool </p>`
}
form.addEventListener('submit', calcolo);