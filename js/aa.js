var table = document.createElement("table");
table.classList.add("tableau");
var grille = document.getElementById("grille");
const btHaut = document.getElementById("haut");
const btBas = document.getElementById("bas");
const btGauche = document.getElementById("gauche");
const btDroite = document.getElementById("droite");
var affs=document.getElementById("affScore")

let tableau_position=[-25,-1,1,25]

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

grille.appendChild(table);

let numAleatoire;

function terrain() {
  var numCelluleTerrain = []; // tableau qui contient les numero de cellule du terrain
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

      
        imageASupprimer.remove();
      
    }
  }

  return numCelluleTerrain;
}
var numTresor = [];
var numMonster = [];
var jeux = terrain();
var joueur = []; 
function jeu(jeux) {
  
  

  let compteur2 = 0;

  while (compteur2 < 5) {
    numAleatoire = Math.floor(Math.random() * jeux.length);
    let j = jeux[numAleatoire];
    var cellules = document.querySelectorAll(".colone_tableau");
    if (!numMonster.includes(j)) {
      var image = document.createElement('img');
      image.src = './img/monster.png';
      cellules[j].appendChild(image);
      numMonster.push(j)
      compteur2++
      console.log("monster " + j);
    }
  }

  
  let compteur3 = 0;

  while (compteur3 < 3) {
    numAleatoire = Math.floor(Math.random() * jeux.length);
    let j = jeux[numAleatoire];
    var cellules = document.querySelectorAll(".colone_tableau");
    if (!numMonster.includes(j) && !numTresor.includes(j)) {
      var image = document.createElement('img');
      image.src = './img/tresor.png';
      cellules[j].appendChild(image);
      numTresor.push(j)
      compteur3++
      console.log("tresor " + j);
    }
  }

  let j;
  while (true) { // une boucle qui creer un emplacement du joueur aleatoirement selon le tableau du terrain
    numAleatoire = Math.floor(Math.random() * (jeux.length - 1));
    j = jeux[numAleatoire];
    if (!numMonster.includes(j) && !numTresor.includes(j)) {
      break;
    }
  }

  console.log("joueur " + numAleatoire);

  var cellules = document.querySelectorAll(".colone_tableau");

  if (!numMonster.includes(j) && !numTresor.includes(j)) {
    var image = document.createElement('img');
    image.src = './img/joueur.png';
    image.classList.add("joueur");
    cellules[j].appendChild(image);
    joueur = [j];
  }

  console.log("*****************************************");
}

jeu(jeux);

let scorre=0

function haut() {
  let position = joueur[0]
  position = position - 25
  if (jeux.includes(position)&&!numMonster.includes(position)) {
    var cellules = document.querySelectorAll(".colone_tableau");
    var image = document.createElement('img');
    image.src = './img/joueur.png';
    image.classList.add("joueur");
    if(numTresor.includes(position)){
        cellules[position].querySelector("img").remove()
        scorre=scorre+1
        let index= numTresor.indexOf(position)
        numTresor.splice(index,1)
        
      }
    cellules[position].appendChild(image);
    cellules[position+25].querySelector("img").remove()
    joueur=[position]
  }
  else{position=position+ 25}
  affs.textContent=scorre

  /*while(true){
    numAleatoire=Math.floor(Ma.random()*40)
    let a=tableau_position[numAleatoire]

  }*/
  
}


function bas() {
    let position = joueur[0]
    position = position + 25
    if (jeux.includes(position)&&!numMonster.includes(position)) {
      var cellules = document.querySelectorAll(".colone_tableau");
      var image = document.createElement('img');
      image.src = './img/joueur.png';
      image.classList.add("joueur");
      if(numTresor.includes(position)){
        cellules[position].querySelector("img").remove()
        scorre=scorre+1
        let index= numTresor.indexOf(position)
        numTresor.splice(index,1)
        
      }
      cellules[position].appendChild(image);
      cellules[position-25].querySelector("img").remove()
      joueur=[position]
      
    }
    else{position=position- 25}
    affs.textContent=scorre
    
}

function gauche() {
    let position = joueur[0]
    position = position - 1
    if (jeux.includes(position)&&!numMonster.includes(position)) {
      var cellules = document.querySelectorAll(".colone_tableau");
      var image = document.createElement('img');
      image.src = './img/joueur.png';
      image.classList.add("joueur");
      if(numTresor.includes(position)){
        cellules[position].querySelector("img").remove()
        scorre=scorre+1
        let index= numTresor.indexOf(position)
        numTresor.splice(index,1)
        
      }
      cellules[position].appendChild(image);
      cellules[position+1].querySelector("img").remove()
      joueur=[position]

      console.log(scorre)
    }
    else{position=position+ 1}
    affs.textContent=scorre
}  

  function droite() {
    let position = joueur[0]
    position = position + 1
    if (jeux.includes(position)&&!numMonster.includes(position)) {
      var cellules = document.querySelectorAll(".colone_tableau");
      var image = document.createElement('img');
      image.src = './img/joueur.png';
      image.classList.add("joueur");
      if(numTresor.includes(position)){
        cellules[position].querySelector("img").remove()
        scorre=scorre+1
        let index= numTresor.indexOf(position)
        numTresor.splice(index,1)
        
      }
      
      cellules[position].appendChild(image);
      cellules[position-1].querySelector("img").remove()
      joueur=[position]
    }
    else{position=position- 1}
    affs.textContent=scorre
    

}

function gagner(){
    if(scorre===3){
        alert("Vous avez gagner")
        window.location.reload(true);
      }
}


btHaut.addEventListener("click", haut);
btBas.addEventListener("click",bas);
btDroite.addEventListener("click",droite);
btGauche.addEventListener("click",gauche);


document.addEventListener("keydown", function(event){
    if(event.key==='ArrowUp'){
        haut();
    }
    else if (event.key === 'ArrowDown') {
        bas();
      } else if (event.key === 'ArrowLeft') {
        gauche();
      } else if (event.key === 'ArrowRight') {
        droite();
      }

});

affs.textContent=scorre;
