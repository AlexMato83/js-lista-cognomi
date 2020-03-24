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

//for per generare la lista
var nomi, prova;
for (var i = 0; i < listSurname.length; i++) {
  nomi = listSurname[i];
console.log(nomi);
//stampa degli items dell'array
prova = document.getElementById('asd').innerHTML;
document.getElementById('asd').innerHTML = prova + " " + nomi;
}

//scrivere posizione della lista del cognome inserito

document.getElementById('lol').innerHTML = "Il cognome inserito nella lista occupa la posizione: " + (listSurname.indexOf(newSurname) + 1);
