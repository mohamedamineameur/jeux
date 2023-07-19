var table = document.createElement("table");
table.classList.add("tableau");

for (let i = 0; i < 15; i++) {
    var ligne = document.createElement("tr");
    ligne.classList.add("ligne_tableau");
    
    for (let j = 0; j < 25; j++) {
        var colone = document.createElement("td");
        colone.classList.add("colone_tableau");
        
        var image = document.createElement('img');
        image.src = './img/img.png';
        
        colone.appendChild(image);
        ligne.appendChild(colone);
    }
    
    table.appendChild(ligne);
}

document.querySelector("main").appendChild(table);

let numAleatoire;

function terrain() {
    var numCelluleTerrain = [];// tableau qui contient les numero de cellule du terrain
    let compteur = 0;
    
    while (true) { // une boucle qui creer la premiere case du terrain aleatoirement entre 185 et 191
        numAleatoire = Math.floor(Math.random() * 199);
        if (numAleatoire < 191 && numAleatoire > 185) {
            break;
        }
    }
    
    
    numCelluleTerrain.push(numAleatoire);
    
    while (compteur < 60) { // une boucle qui creer 60 case du terrain aleatoirement en respectant l'obligation d'une presence d'une case qui soit a -1 ou +1 ou -25 ou + 25 dans le tableau
        numAleatoire = Math.floor(Math.random() * 301);
        if (!numCelluleTerrain.includes(numAleatoire) && (numCelluleTerrain.includes(numAleatoire - 25) || numCelluleTerrain.includes(numAleatoire + 25) || numCelluleTerrain.includes(numAleatoire - 1) || numCelluleTerrain.includes(numAleatoire + 1))) {
            numCelluleTerrain.push(numAleatoire);
            compteur++;
        }
    }

    for (let i = 0; i < 374; i++) { // une boucle pour creer le terrain en suprimant les image pésente dans le tableau numCelleTerrain
        if (numCelluleTerrain.includes(i)) {
            var cellules = document.querySelectorAll(".colone_tableau");
            var imageASupprimer = cellules[i].querySelector("img");
            
            if (imageASupprimer) {
                imageASupprimer.remove();
            }
        }
    }
    
    return numCelluleTerrain;


}

var monTerrain = terrain();


function jeu(objet  ){
    var jeux=objet.numCelluleTerrain

    var monster
var numMonster= []

let compteur2=0

while(compteur2<5){
    numAleatoire = Math.floor(Math.random() * jeux.length);
    let j = monTerrain[numAleatoire];
    var cellules = document.querySelectorAll(".colone_tableau");
    if(!numMonster.includes(j)){
        var image = document.createElement('img');
        image.src = './img/monster.png';
        cellules[j].appendChild(image); 
        numMonster.push(j)
        compteur2++
        console.log("moster "+numAleatoire)


    }

}




var numTresor=[]
let compteur3=0
while(compteur3<3){

    numAleatoire = Math.floor(Math.random() * jeux.length);
    let j = monTerrain[numAleatoire];
    var cellules = document.querySelectorAll(".colone_tableau");
    if(!numMonster.includes(j)&&!numTresor.includes(j)){
        var image = document.createElement('img');
        image.src = './img/tresor.png';
        cellules[j].appendChild(image); 
        numTresor.push(numAleatoire)
        compteur3++
        console.log("moster "+numAleatoire)


    }

}


while(true){ // une boucle qui creer un emplacement du joueur aleatoirement selon le tableau du terrain
    numAleatoire = Math.floor(Math.random() * (jeux.length-1));
    if(!numMonster.includes(numAleatoire)&&!numTresor.includes(numAleatoire)){
        break;

    }
}

console.log("joueur "+numAleatoire);
        let j = monTerrain[numAleatoire];
    
        var cellules = document.querySelectorAll(".colone_tableau");
        monster = cellules[j].querySelector("img");
        treasure = cellules[j].querySelector(".tresor");
        joueur=cellules[j].querySelector(".joueur")
    
        if (!monster && !treasure&&!joueur) {
            var image = document.createElement('img');
            image.src = './img/joueur.png';
            image.classList.add("joueur");
            cellules[j].appendChild(image); 
             
        }

        console.log("*****************************************")

    

}   

jeu(monTerrain)
    




