//Variable declare
const friends = [];
const listaAmi = document.querySelector('#listaAmigos');
const elegido = document.querySelector('#resultado');
let li;
let list;


//Functions

function agregarAmigo(){
    friends.push(document.getElementById('amigo').value);

    li = document.createElement('li');
    li.textContent = friends[friends.length -1];

    list = listaAmi.appendChild(li);

    console.log(friends);
    console.log(list);

}
function getRandomNumber(max){
    return Math.floor(Math.random()* max);
}
//
function sortearAmigo(){
    maximo = friends.length;
    let num = getRandomNumber(maximo);
    listaAmi.textContent = '';
    switch(num){
        case 0:
            result = li.textContent =`Tu amigo secreto será ${friends[0]}`;
            elegido.appendChild(li);
        break;
        case 1:
            result = li.textContent = `Tu amigo secreto será ${friends[1]}`;
            elegido.appendChild(li);
        break;
        case 2:
            result = li.textContent = `Tu amigo secreto será ${friends[2]}`;
            elegido.appendChild(li);
        break;
        case 3:
            result = li.textContent = `Tu amigo secreto será ${friends[3]}`;
            elegido.appendChild(li);
        break;
        case 4:
            result = li.textContent = `Tu amigo secreto será ${friends[4]}`;
            elegido.appendChild(li);
        break;
        case 5:
            result = li.textContent = `Tu amigo secreto será ${friends[5]}`;
            elegido.appendChild(li);
        break;
    }
    console.log(elegido)
}
console.log(friends);
