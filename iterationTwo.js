/* 2.1 Inserta dinamicamente en un html un div vacio con javascript.

2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
	Recuerda que no solo puedes insertar elementos con .appendChild.

2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here */


// 2.1
let newDiv = document.createElement("div");
    document.body.appendChild(newDiv);

//2.2
let nuevoDiv = document.createElement("div");
    document.body.appendChild(nuevoDiv);
    let nuevaP = document.createElement("p");
    nuevoDiv.appendChild(nuevaP);

// 2.3
let newDivTwo = document.createElement("div");
document.body.appendChild(newDivTwo);
for (let i = 1; i <= 6; i++) {
    let newsP = document.createElement("p");
	newDivTwo.appendChild(newsP);
}

// 2.4
let newDivThree = document.createElement("div");
document.body.appendChild(newDivThree);
let newP = document.createElement("p");
let newText = document.createTextNode("Soy dinámico!");
newP.appendChild(newText);
newDivThree.appendChild(newP);

//2.5
let textClass = document.getElementsByClassName("fn-insert-here");
    textClass[0].innerHTML += "Wubba Lubba dub dub";

//2.6
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
    let newList = document.createElement("ul");
    for (const app of apps) {
        let newItem = document.createElement("li");
        newItem.innerHTML += app;
        newList.appendChild(newItem);
    }
    document.body.appendChild(newList); 

 // 2.8
/* let elements = document.querySelectorAll("div");
    const firstElementDiv = elements[0];
    const middleP = document.createElement("p");
    middleP.textContent = 'Voy en medio!'; 
    firstElementDiv.insertAdjacentElement("afterend", middleP); */

// 2.9
/* let elements = document.getElementsByClassName("fn-insert-here");
    for (const element of elements) {
        const newPIn = document.createElement("p");
        newPIn.textContent = "Voy dentro!"; 
        element.insertAdjacentElement("beforeend", newPIn);
	}  */

	
	
	
	
	
	//2.7 NO CONSEGUIDO!
/* let elements = document.getElementsByClassName('fn-remove-me');
   for(const element of elements)
   elements.removeChild(element)
 */