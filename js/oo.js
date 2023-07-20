var table = document.createElement("table");
table.classList.add("tableau");
var grille = document.getElementById("grille");
const btHaut = document.getElementById("haut");
const btBas = document.getElementById("bas");
const btGauche = document.getElementById("gauche");
const btDroite = document.getElementById("droite");
var affs=document.getElementById("affScore")



let table_monstrer=[]

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
      table_monstrer.push([compteur2,j])
      cellules[j].setAttribute('data-monstre', 'true');
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
    
    cellules[position].appendChild(image);
    cellules[position+25].querySelector("img").remove()
    joueur=[position]
    if(numTresor.includes(position)){
      cellules[position].querySelector("img").remove()
      
      let index= numTresor.indexOf(position)
      numTresor.splice(index,1)
      scorre=scorre+1
      
    }
  }
  else{position=position+ 25}
  affs.textContent=scorre
  gagner();

  }
  



function bas() {
    let position = joueur[0]
    position = position + 25
    if (jeux.includes(position)&&!numMonster.includes(position)) {
      var cellules = document.querySelectorAll(".colone_tableau");
      var image = document.createElement('img');
      image.src = './img/joueur.png';
      image.classList.add("joueur");
      
      cellules[position].appendChild(image);
      cellules[position-25].querySelector("img").remove()
      joueur=[position]
      if(numTresor.includes(position)){
        cellules[position].querySelector("img").remove()
        
        let index= numTresor.indexOf(position)
        numTresor.splice(index,1)
        scorre=scorre+1
        
      }
      
    }
    else{position=position- 25}
    affs.textContent=scorre

    gagner();
    
}

function gauche() {
    let position = joueur[0]
    position = position - 1
    if (jeux.includes(position)&&!numMonster.includes(position)) {
      var cellules = document.querySelectorAll(".colone_tableau");
      var image = document.createElement('img');
      image.src = './img/joueur.png';
      image.classList.add("joueur");
      
      cellules[position].appendChild(image);
      cellules[position+1].querySelector("img").remove()
      joueur=[position]

      console.log(scorre)

      if(numTresor.includes(position)){
        cellules[position].querySelector("img").remove()
        
        let index= numTresor.indexOf(position)
        numTresor.splice(index,1)
        scorre=scorre+1
        
      }
    }
    else{position=position+ 1}
    affs.textContent=scorre
    gagner();

}  

  function droite() {
    let position = joueur[0]
    position = position + 1
    if (jeux.includes(position)&&!numMonster.includes(position)) {
      var cellules = document.querySelectorAll(".colone_tableau");
      var image = document.createElement('img');
      image.src = './img/joueur.png';
      image.classList.add("joueur");
      
      
      cellules[position].appendChild(image);
      cellules[position-1].querySelector("img").remove()
      joueur=[position]
      if(numTresor.includes(position)){
        cellules[position].querySelector("img").remove()
        
        let index= numTresor.indexOf(position)
        numTresor.splice(index,1)
        scorre=scorre+1
        
      }
    }
    else{position=position- 1}
    affs.textContent=scorre
    gagner();

}

function gagner(){
    if(scorre===3){
        alert("Vous avez gagner")
        window.location.reload(true);
      }
}

let tableau_position=[-25,-1,1,25]

function deplacementMonstre(){

    
    var cellules = document.querySelectorAll(".colone_tableau");
    var image = document.createElement('img');
    image.src = './img/monster.png';
    
    
    for (let i=0;i<table_monstrer.length;i++){
        while(true){
        numAleatoire=Math.floor(Math.random()*4)
        let a=tableau_position[numAleatoire]
        let h = table_monstrer[i][0]
        let l = table_monstrer[i][1]
        if (a==-1){
        if(!numTresor.includes(l+a)&&jeux.includes(l+a)&&!numMonster.includes(l+a)){
            cellules[l+a].appendChild(image);
            cellules[l].querySelector("img").remove()
            table_monstrer.push([h,l+a])
            if(joueur==l+a){
                alert("perdu")
                
            }
            break;

        }}
        else if (a==1){
          if(!numTresor.includes(l+a)&&jeux.includes(l+a)&&!numMonster.includes(l+a)){
            cellules[l+a].appendChild(image);
            cellules[l].querySelector("img").remove()
            table_monstrer.push([h,l+a])
            if(joueur==l+a){
                alert("perdu")
                
            }
            break;

        }
          
        }
        else if(a==-25){

          if(!numTresor.includes(l+a)&&jeux.includes(l+a)&&!numMonster.includes(l+a)){
            cellules[l+a].appendChild(image);
            cellules[l].querySelector("img").remove()
            table_monstrer.push([h,l+a])
            if(joueur==l+a){
                alert("perdu")
                
            }
            break;

        }


        }
        else if(a==25){

          if(!numTresor.includes(l+a)&&jeux.includes(l+a)&&!numMonster.includes(l+a)){
            cellules[l+a].appendChild(image);
            cellules[l].querySelector("img").remove()
            table_monstrer.push([h,l+a])
            if(joueur==l+a){
                alert("perdu")
                
            }
            break;

        }


        }

        }
    
        
    }




}


/*btHaut.addEventListener("click", haut, deplacementMonstre);
btBas.addEventListener("click",bas, deplacementMonstre);
btDroite.addEventListener("click",droite,deplacementMonstre);
btGauche.addEventListener("click",gauche,deplacementMonstre);*/


document.addEventListener("keydown", function(event){
    if(event.key==='ArrowUp'){
        haut();
        deplacementMonstre();
        
    }
    else if (event.key === 'ArrowDown') {
        bas();
        deplacementMonstre();
      } else if (event.key === 'ArrowLeft') {
        gauche();
        deplacementMonstre();
      } else if (event.key === 'ArrowRight') {
        droite();
        deplacementMonstre();
      }

});

affs.textContent=scorre;

// function deplacementMonstre() {
//   var cellules = document.querySelectorAll(".colone_tableau");
//   var image = document.createElement('img');
//   image.src = './img/monster.png';

//   // Nouveau tableau pour stocker les nouvelles coordonnées des monstres après un déplacement
//   var new_table_monstrer = [];

//   for (let i = 0; i < table_monstrer.length; i++) {
//     let h = table_monstrer[i][0];
//     let l = table_monstrer[i][1];

//     // Tableau des déplacements possibles : [-25, -1, 1, 25] (haut, gauche, droite, bas)
//     let tableau_deplacements = [-25, -1, 1, 25];

//     // Filtrer les déplacements valides en fonction de la position actuelle du monstre
//     let deplacements_valides = tableau_deplacements.filter(deplacement => {
//       let nouvellePosition = l + deplacement;
//       return jeux.includes(nouvellePosition) && !numMonster.includes(nouvellePosition);
//     });

//     // Vérifier s'il y a des déplacements valides possibles pour le monstre
//     if (deplacements_valides.length > 0) {
//       // Choisir aléatoirement un déplacement valide parmi les possibilités
//       let directionAleatoire = Math.floor(Math.random() * deplacements_valides.length);
//       let deplacementChoisi = deplacements_valides[directionAleatoire];

//       // Nouvelles coordonnées du monstre après le déplacement
//       let nouvellePosition = l + deplacementChoisi;

//       // Supprimer le monstre de sa position actuelle, s'il y a une image à supprimer
//       let imageASupprimer = cellules[l].querySelector("img");
//       if (imageASupprimer) {
//         cellules[l].removeChild(imageASupprimer);
//       }

//       // Déplacer le monstre dans la nouvelle position
//       cellules[nouvellePosition].appendChild(image);

//       // Mettre à jour les coordonnées du monstre dans le nouveau tableau
//       new_table_monstrer.push([h, nouvellePosition]);
//     } else {
//       // Si aucun déplacement valide n'est possible, le monstre reste à sa position actuelle
//       new_table_monstrer.push([h, l]);
//     }
//   }

//   // Remplacer l'ancien tableau par le nouveau tableau de coordonnées des monstres
//   table_monstrer = new_table_monstrer;
// }


