# object-constructor-function.js
object constructor function voiture

var date = new Date(2010);    //date de "new Date" écris en majuscule en 1er car C'est une class pas une var

/*Objet constructor function*/
function Voiture(marque, modele, annee) {
    this.marque = marque;
    this.modele = modele;
    this.annee = annee;
    this.i = 0;   //            définir i pour démarrer le calcul
    this.compteurKm = function() {
        return this.i++;
    }
    this.compteurInitial = function(km) {
        return this.i = km;                 // partira du compteur initial de la voiture
    }

}

var  voiture1 = new Voiture("Renault", "Twingo", 2000); // new Voiture = Majuscule car Class
voiture1.compteurInitial(1000)
var  voiture2 = new Voiture("Citroen", "Picasso", 2004); 
voiture2.compteurInitial(5000)

console.log("marque " + voiture1.marque);   // ecrit "marque Renault" de la voiture 1
console.log("marque " + voiture2.marque);

console.log("compteurKm " + voiture1.compteurKm());
console.log("compteurKm " + voiture2.compteurKm());
console.log("compteurKm " + voiture1.compteurKm());  // i va ajouter 1 au compteur de la voiture 1
console.log("compteurKm " + voiture2.compteurKm());  // ""    ""    ""    ""   ""  de la voiture 2
