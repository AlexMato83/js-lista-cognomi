/*Chiedi all’utente il cognome, inseriscilo in un array con altri cognomi e stampa la lista ordinata alfabeticamente.
Scrivi anche la posizione della lista in cui il nuovo utente si trova */

//chiedere il cognome all'utente
var newSurname = prompt("Prego inserirca il suo cognome")
//creare array di cognomi
var listSurname = ["Montanari", "Randazzo", "Fraternali", "Fiaschi"]
console.log(listSurname);

//inserire cognome nell'array
listSurname.push(newSurname);
console.log(listSurname);

//stampare l'array in ordine alfabetico
var ordinamento = listSurname.sort();
console.log("output ");
console.log(ordinamento);
console.log("finito");
//scrivere posizione della lista del cognome inserito
var nomi, prova;
for (var i = 0; i < listSurname.length; i++) {
  nomi = listSurname[i];
console.log(nomi);
prova = document.getElementById('asd').innerHTML;
document.getElementById('asd').innerHTML = prova + " " + nomi;
}



// var nomi;
// var spaziovuoto;
// for (var i = 0; i < ordinamento.length; i++) {
//   nomi = nomi + " " + ordinamento[i];
// }
//
//
// document.getElementById('asd').innerHTML = nomi ;
