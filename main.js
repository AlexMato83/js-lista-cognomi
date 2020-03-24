/*Chiedi all’utente il cognome, inseriscilo in un array con altri cognomi e stampa la lista ordinata alfabeticamente.
Scrivi anche la posizione della lista in cui il nuovo utente si trova */

//chiedere il cognome all'utente
var newSurname = prompt("Prego inserirca il suo cognome")
//creare array di cognomi
var listSurname = ["Montanari", "Randazzo", "Fraternali", "Fiaschi"]
console.log(listSurname);

//inserire cognome nell'array
var listSurname2 = listSurname.push(newSurname);
console.log(listSurname);

//stampare l'array in ordine alfabetico
var ordinamento = listSurname2.sort();
console.log(ordinamento);
//scrivere posizione della lista del cognome inserito
