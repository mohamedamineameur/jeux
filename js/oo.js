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
    var numCelluleTerrain = [];
    let compteur = 0;
    
    while (true) {
        numAleatoire = Math.floor(Math.random() * 199);
        if (numAleatoire < 191 && numAleatoire > 185) {
            break;
        }
    }
    
    
    numCelluleTerrain.push(numAleatoire);
    
    while (compteur < 60) {
        numAleatoire = Math.floor(Math.random() * 301);
        if (!numCelluleTerrain.includes(numAleatoire) && (numCelluleTerrain.includes(numAleatoire - 25) || numCelluleTerrain.includes(numAleatoire + 25) || numCelluleTerrain.includes(numAleatoire - 1) || numCelluleTerrain.includes(numAleatoire + 1))) {
            numCelluleTerrain.push(numAleatoire);
            compteur++;
        }
    }
    
    return numCelluleTerrain;
}

var monTerrain = terrain();


    
    



for (let i = 0; i < 374; i++) {
    if (monTerrain.includes(i)) {
        var cellules = document.querySelectorAll(".colone_tableau");
        var imageASupprimer = cellules[i].querySelector("img");
        
        if (imageASupprimer) {
            imageASupprimer.remove();
        }
    }
}
var monster
var numMonster= []
for (let i = 0; i < 5; i++) {
    numAleatoire = Math.floor(Math.random() * monTerrain.length);
    console.log("monster "+numAleatoire);
    let j = monTerrain[numAleatoire];

    var cellules = document.querySelectorAll(".colone_tableau");
     monster = cellules[j].querySelector("img");

    if (!monster) {
        var image = document.createElement('img');
        image.src = './img/monster.png';
        cellules[j].appendChild(image); 
        numMonster.push(numAleatoire)

    }
}


var numTresor=[]
for (let i = 0; i < 3; i++) {
    do {
        numAleatoire = Math.floor(Math.random() * monTerrain.length);
        console.log("tresor "+numAleatoire);
        let j = monTerrain[numAleatoire];
    
        var cellules = document.querySelectorAll(".colone_tableau");
        monster = cellules[j].querySelector("img");
        treasure = cellules[j].querySelector(".tresor");
    
        if (!monster && !treasure) {
            var image = document.createElement('img');
            image.src = './img/tresor.png';
            image.classList.add("tresor");
            cellules[j].appendChild(image); 
            numTresor.push(numAleatoire)
            break; 
        }
    } while (true);
}

while(true){
    numAleatoire = Math.floor(Math.random() * (monTerrain.length-1));
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
