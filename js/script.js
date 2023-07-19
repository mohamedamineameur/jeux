var table = document.createElement("table");
var numRows = 15; 
var numCols = 25; 

table.classList.add("table-style");

for (var i = 0; i < numRows; i++) {
  var row = document.createElement("tr");
  row.classList.add("row-style");

  for (var j = 0; j < numCols; j++) {
    var cell = document.createElement("td");
    cell.classList.add("cell-style");

    row.appendChild(cell);
  }

  table.appendChild(row);
}

document.body.appendChild(table);
let randomNumber
function terrain (){
var num= []
let o=0
while(true){
randomNumber = Math.floor(Math.random() *199);
if (randomNumber<193 && randomNumber>182){
    break
}
}
console.log(randomNumber)
num.push(randomNumber)
while (o<60){


randomNumber = Math.floor(Math.random() * 301); 
if(!num.includes(randomNumber)&&(num.includes(randomNumber-25)||num.includes(randomNumber+25)||num.includes(randomNumber-1)||num.includes(randomNumber+1))){
    num.push(randomNumber)
    o++
}

}
return num 

}


  

var cells = table.getElementsByTagName("td");
var a= terrain()
for (var k = 0; k < 374; k++) {

    if(a.includes(k)){
  var cell = cells[k];
  
  cell.style.backgroundColor = "yellow";
    }
}


