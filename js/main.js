
/**
 * JSnack 1
Creare un array di oggetti
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore con handlebars.
 * 
 */
/*var collezione = [
    {
        "nome":"velocipede",
        "peso":46
    },
    {
        "nome":"hybrid-bike",
        "peso":22
    },
    {
        "nome":"ciclo-cross",
        "peso":16
    },
    {
        "nome":"downhill-bike",
        "peso":30
    }
]
console.log(collezione);

//Handlebars
var source = $ ('#bici-template').html();
var template = Handlebars.compile(source);

// Seleziono la bici con minor peso:

var peso_corrente = collezione[0].peso;
var nome_corrente = "";
for (var i = 0; i < collezione.length; i++) {
    if (collezione[i].peso <= peso_corrente) {
        peso_corrente = collezione[i].peso;
        nome_corrente = collezione[i].nome;
    }
}

alert("Il peso della bici più leggera è: "+ peso_corrente + " La vincitrice della leggerezza è " + nome_corrente + ".");


var data = {
    nome: nome_corrente.nome,
    peso: peso_corrente.peso
};

var html = template(data);
$('container').append(html)*/

    
/**
 * JSnack 2
Partendo da un array di nomi (scelti da voi) creiamo un nuovo array.
Chiedere due numeri all'utente per definire la posizione iniziale e finale dal quale estrarre i valori dall'array originale.
Il nuovo array deve contenere gli elementi dell'array originale aventi la posizione (indice array)  compresa tra i due numeri inseriti dall'utente.
 * 
 */


// Creazione array con nomi
var nomi = ['marco', 'filippo', 'genzianello'];
console.log(nomi);

// Chiedo numero ad utente
var numero = parseInt(prompt('inserisci un numero tra 0 e 2'));
console.log(numero);


if(isNaN(numero) || numero < 0 || numero > 2) {
    // se il valore inserito non è un numero, oppure è < 0, oppure è > 2
    // => non esiste una posizione corrispondente all'interno dell'array
    console.log('warning: non hai inserito un numero valido!');
} else {
    // il valore è un numero ed è >= 0 ed è <= 2
    // => corrispondente ad una posizione valida all'interno dell'array
    var nome_scelto = nomi[numero];
    console.log(nome_scelto);
}
