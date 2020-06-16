

//>>
var all_buttons = document.getElementsByTagName('button');

//>>
var color_buttons = [];

for(let i = 0; i < all_buttons.length; i++){
    color_buttons.push(all_buttons[i]);
}
console.log(color_buttons[0]);
//>>
function changeColor(color){
    if(color.value === 'red'){
        buttonsRed();
    }
    else if(color.value === 'green'){
        buttonsGreen();
    }
    else if(color.value === 'blue'){
        buttonsBlue();
    }
    else if(color.value === 'yellow'){
        buttonsYellow();
    }
    else if(color.value === 'random'){
        buttonsRandom();
    }
}

//>>
function buttonsRed(){
    for(let i = 0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}

//>>
function buttonsGreen(){
    for(let b = 0; b < all_buttons.length; b++){
        all_buttons[b].classList.remove(all_buttons[b].classList[1]);
        all_buttons[b].classList.add('btn-success');
    }
}

//>>
function buttonsBlue(){
    for(let c = 0; c < all_buttons.length; c++){
        all_buttons[c].classList.remove(all_buttons[c].classList[1]);
        all_buttons[c].classList.add('btn-primary');
    }
}

//>>
function buttonsYellow(){
    for(let i = 0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-warning');
    }
}

//>>
function buttonsRandom(){
    var choice = ['btn-primary', 'btn-danger', 'btn-warning', 'btn-success'];
    for(let i = 0; i < all_buttons.length; i++){
        const randNum = randomToInt();
        //>>
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choice[randNum]);
    }
}

function randomToInt() {
	return Math.floor(Math.random() * 4)
}
