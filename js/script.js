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

