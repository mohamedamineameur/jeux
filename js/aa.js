var table = document.createElement("table");
table.classList.add("tableau");
var div = document.getElementById("div_grille");
const btHaut = document.getElementById("haut");
const btBas = document.getElementById("bas");
const btGauche = document.getElementById("gauche");
const btDroite = document.getElementById("droite");
const btremzero= document.getElementById("remzero")
var affs=document.getElementById("affScore")



//let table_monstrer=[]

for (let i = 0; i < 15; i++) { // boucle qui créer un tableau html de 25td X 15tr
  var ligne = document.createElement("tr");
  ligne.classList.add("ligne_tableau");

  for (let j = 0; j < 25; j++) {
    var colone = document.createElement("td");
    colone.classList.add("colone_tableau");

    var image = document.createElement('img');// créer un element img qui sera le mur
    image.src = './img/img.png';

    colone.appendChild(image); // ajout de l'image dans le td
    ligne.appendChild(colone); // ajout du td dans le tr
  }

  table.appendChild(ligne);// ajout du tr dans le tableau
}

div.appendChild(table);// ajout du tableau dans le div_grille

let numAleatoire;

function terrain() { // fonction qui créer le sol du terrain en suprimant les image du mur
  var numCelluleTerrain = []; // tableau qui contient les numero de cellule du sol du terrain
  let compteur = 0;

  while (true) { // une boucle qui creer la premiere cellule du sol du terrain aleatoirement entre 185 et 191
    numAleatoire = Math.floor(Math.random() * 199);
    if (numAleatoire < 191 && numAleatoire > 185) {
      break;
    }
  }


  numCelluleTerrain.push(numAleatoire); // ajout de la cellule au tableau des cellule

  while (compteur < 60) { // une boucle qui creer 60 cellule sol de du terrain aleatoirement en respectant l'obligation d'une presence d'une cellule qui soit a -1 ou +1 ou -25 ou + 25 dans le tableau des cellule
    numAleatoire = Math.floor(Math.random() * 301);
    if (!numCelluleTerrain.includes(numAleatoire) && (numCelluleTerrain.includes(numAleatoire - 25) || numCelluleTerrain.includes(numAleatoire + 25) || numCelluleTerrain.includes(numAleatoire - 1) || numCelluleTerrain.includes(numAleatoire + 1))) {
      numCelluleTerrain.push(numAleatoire);
      compteur++;
    }
  }

  /* une fois la liste des cellule a été créée maintenant on va suprimer les images du mur qui sont dans les cellule présentes dans cette liste*/


  for (let i = 0; i < 374; i++) { // une boucle pour creer le sol du terrain en suprimant les image pésente dans le tableau numCelleTerrain
    if (numCelluleTerrain.includes(i)) {
      var cellules = document.querySelectorAll(".colone_tableau");// variable qui stock les cellule de la grille
      var imageASupprimer = cellules[i].querySelector("img"); // variable qui stock les element de type "img"

      
        imageASupprimer.remove(); // commande pour suprimer cette image
      
    }
  }

  return numCelluleTerrain; // retourner un tableau qui contient le numero des cellule du sol pour le réutiliser
}



var numTresor = []; // tableau qui stock les cellules des tresor
var numMonster = []; // tableau qui stock les cellule des monstre
var jeux = terrain(); // variable qui stocke les cellule du sol de terrain obtenu de la fonction terrain()
var joueur = [];  // variable qui stock la cellule du joueur



function jeu(jeux) { // la fonction qui créer les monstres, les trésor et le joueur en fonction de la variable jeux obtenu de la fonction terrain
  
  

  let compteur2 = 0;

  while (compteur2 < 3) { // boucle qui créer les monstre et le compteur2 est incrémenté selon une condition
    numAleatoire = Math.floor(Math.random() * jeux.length); // choisir un nombre aleatoire parmis les index du tableau jeux
    let j = jeux[numAleatoire];// récupérer une position dans le tableau jeux grace a l'indice aleatoire
    var cellules = document.querySelectorAll(".colone_tableau");// stocker les td dans la variable cellule
    if (!numMonster.includes(j)) {// verifier si cette position n'est pas deja prise
      var image = document.createElement('img');// créer un element html de type img
      image.src = './img/monster.png'; //importer l'image du monstre et la mettre dans l'element html de type img
      cellules[j].appendChild(image);// ajouter cet element au td qui stockée dans la variable cellule 
      numMonster.push(j)// stockage de la position monstre dans le tableau numMonstrer
      //table_monstrer.push([compteur2,j])
      
      compteur2++ // incrémenter le compteur
      console.log("monster " + (compteur2+1)+ " " + j); // ligne de debogage
    }
  }

  
  let compteur3 = 0;

  while (compteur3 < 3) {// boucle qui créer les trésors et le compteur3 est incrémenté selon une condition
    numAleatoire = Math.floor(Math.random() * jeux.length);// choisir un nombre aleatoire parmis les index du tableau jeux
    let j = jeux[numAleatoire];// récupérer une position dans le tableau jeux grace a l'indice aleatoire
    var cellules = document.querySelectorAll(".colone_tableau");// stocker les td dans la variable cellule
    if (!numMonster.includes(j) && !numTresor.includes(j)) {// verifier si cette position n'est pas deja prise
      var image = document.createElement('img');// créer un element html de type img
      image.src = './img/tresor.png'; //importer l'image du monstre et la mettre dans l'element html de type img
      cellules[j].appendChild(image); // ajouter cet element au td qui stockée dans la variable cellule
      numTresor.push(j)//stockage de la position du trésor dans le tableau numTrésor
      compteur3++ // incrémentation du comteur
      console.log("tresor " + j);// ligne de debogage
    }
  }

  let j;
  while (true) { // une boucle qui creer un emplacement du joueur aleatoirement selon le tableau du terrain
    numAleatoire = Math.floor(Math.random() * (jeux.length ));
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
      playSquareBipSound()
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
        playSquareBipSound()
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
        playSquareBipSound()
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
        playSquareBipSound()
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

    
    
    
    
    for (let i=0;i<numMonster.length;i++){
      var cellules = document.querySelectorAll(".colone_tableau");
    var image = document.createElement('img');
    image.src = './img/monster.png';
        while(true){
        numAleatoire=Math.floor(Math.random()*4)
        let a=tableau_position[numAleatoire]
        
        let l = numMonster[i]
        console.log("voir: "+l)
        if (a==-1){
        if(!numTresor.includes(l+a)&&jeux.includes(l+a)&&!numMonster.includes(l+a)){
            cellules[l+a].appendChild(image);
            numMonster[i]=l+a

            cellules[l].querySelector("img").remove()
            console.log("apres deplacement du monstre :" + (i+1)+ " sa position est devenue: "+numMonster[i])
            if(joueur==l+a){
                alert("perdu")
                window.location.reload(true);
                
            }
            break;

        }}
        else if (a==1){
          if(!numTresor.includes(l+a)&&jeux.includes(l+a)&&!numMonster.includes(l+a)){
            cellules[l+a].appendChild(image);
            numMonster[i]=l+a
            cellules[l].querySelector("img").remove()
            console.log("apres deplacement du monstre :" + (i+1)+ " sa position est devenue: "+numMonster[i])
            if(joueur==l+a){
                alert("perdu")
                window.location.reload(true);
                
            }
            break;

        }
          
        }
        else if(a==-25){

          if(!numTresor.includes(l+a)&&jeux.includes(l+a)&&!numMonster.includes(l+a)){
            cellules[l+a].appendChild(image);
            numMonster[i]=l+a
            cellules[l].querySelector("img").remove()
            console.log("apres deplacement du monstre :" + (i+1)+ " sa position est devenue: "+numMonster[i])
            if(joueur==l+a){
                alert("perdu")
                window.location.reload(true);
                
            }
            break;

        }


        }
        else if(a==25){

          if(!numTresor.includes(l+a)&&jeux.includes(l+a)&&!numMonster.includes(l+a)){
            cellules[l+a].appendChild(image);
            numMonster[i]=l+a
            cellules[l].querySelector("img").remove()
            
            console.log("apres deplacement du monstre :" + (i+1)+ " sa position est devenue: "+numMonster[i])
            if(joueur==l+a){
                alert("perdu")
                window.location.reload(true);
                
            }
            break;

        }


        }

        }
    
        console.log("boucle: "+(i+1))
    }




}


btHaut.addEventListener("click", function(){haut(), deplacementMonstre()});
btBas.addEventListener("click",function(){bas(), deplacementMonstre()});
btDroite.addEventListener("click",function(){droite(), deplacementMonstre()});
btGauche.addEventListener("click",function(){gauche(), deplacementMonstre()});
btremzero.addEventListener("click",function(){window.location.reload(true);

})


document.addEventListener("keydown", function(event){
    if(event.key==='ArrowUp'){
        haut();
        deplacementMonstre();
        playBipSound();
        
    }
    else if (event.key === 'ArrowDown') {
        bas();
        deplacementMonstre();
        playBipSound();
      } else if (event.key === 'ArrowLeft') {
        gauche();
        deplacementMonstre();
        playBipSound();
      } else if (event.key === 'ArrowRight') {
        droite();
        deplacementMonstre();
        playBipSound();
      }

      console.log("***************************************************")
    });

affs.textContent=scorre;




/************************************************************************************************************* */
/************************************************************************************************************* */


// toutes les fonction a partir de cette ligne sont tirées de ChatGPT


function playBipSound() {
  // Vérifier si l'API Web Audio est prise en charge par le navigateur
  if (typeof AudioContext !== 'undefined' || typeof webkitAudioContext !== 'undefined') {
      // Créer un contexte audio
      var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

      // Créer un oscillateur pour générer le son
      var oscillator = audioCtx.createOscillator();

      // Connecter l'oscillateur au contexte audio
      oscillator.connect(audioCtx.destination);

      // Définir le type de forme d'onde du son (sinus ici pour un bip simple)
      oscillator.type = 'sine';

      // Définir la fréquence du son (en Hz)
      oscillator.frequency.setValueAtTime(440, audioCtx.currentTime); // 440 Hz est le La de référence

      // Démarrer l'oscillateur
      oscillator.start();

      // Arrêter l'oscillateur après 0.2 seconde (ajustez cette valeur selon vos préférences)
      oscillator.stop(audioCtx.currentTime + 0.2);
  } else {
      // Si l'API Web Audio n'est pas prise en charge, affichez un message d'erreur
      alert("L'API Web Audio n'est pas prise en charge par votre navigateur. Le bip sonore ne peut pas être joué.");
  }
}




function playSquareBipSound() {
  if (typeof AudioContext !== 'undefined' || typeof webkitAudioContext !== 'undefined') {
      var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      var oscillator = audioCtx.createOscillator();
      oscillator.connect(audioCtx.destination);
      
      // Définir le type de forme d'onde du son (carrée cette fois)
      oscillator.type = 'square';

      oscillator.frequency.setValueAtTime(440, audioCtx.currentTime);
      oscillator.start();
      oscillator.stop(audioCtx.currentTime + 0.2);
  } else {
      alert("L'API Web Audio n'est pas prise en charge par votre navigateur. Le bip sonore ne peut pas être joué.");
  }
}