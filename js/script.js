// Esercizio N.1

// L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.

 var primaParola = prompt('inserisci una parola');
 var secondaParola = prompt('inserisci un\'altra parola');

 if (primaParola.length > secondaParola.length){
     document.getElementById("parola").innerHTML = 'La seconda parola è più corta ed è: ' + secondaParola;

 }else if (primaParola.length < secondaParola.length){
     document.getElementById("parola").innerHTML = 'La prima parola è più corta ed è: ' + primaParola;
 }else{
     document.getElementById("parola").innerHTML = 'Le due parole hanno la stessa lunghezza e sono: ' + primaParola + secondaParola;

 }


// Esercizio N.2

// Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri   inseriti. Esegui questo programma in due versioni, con il for e con il while.

 var somma = 0;
 for (var i = 0; i<5; i++){
    
     var numero = parseInt(prompt('Inserisci un numero'));
     somma = somma + numero;
  }
  console.log(somma);


// Esercizio N.3

//Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array

 var array = []

 for (i=0; i<6; i++){

     var numero = parseInt(prompt('Inserisci un numero'));
     if (numero % 2 != 0){
        
         array.push(numero)
     }
 }
 console.log(array);

// Esercizio N.4

//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

var cognome = prompt('Inserisci il tuo cognome');

var listaCognomi = ['Rossi','Blu','Gialli','Neri'];

var cognomeCapitalized = cognome.charAt(0).toUpperCase() + cognome.slice(1).toLowerCase();
console.log(cognomeCapitalized);

for (var i=0; i<listaCognomi.length; i++){

    if (cognomeCapitalized == listaCognomi[i]){
        document.getElementById("invitati").innerHTML = cognomeCapitalized + ' Sei un invitato'
    } else if (cognomeCapitalized != listaCognomi[i]){
        document.getElementById("invitati").innerHTML = cognomeCapitalized + ' Non sei invitato'
    }
}
