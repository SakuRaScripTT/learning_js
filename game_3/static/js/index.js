/* card options */
	const cardArray = [
	{
		name: '1',
		img: 'static/img/1.png'
	}, 
	{
		name: '2',
		img: 'static/img/2.png'
	},
	{
		name: '3',
		img: 'static/img/3.png'
	},
	{
		name: '4',
		img: 'static/img/4.png'
	},
	{
		name: '1',
		img: 'static/img/1.png'
	}, 
	{
		name: '2',
		img: 'static/img/2.png'
	},
	{
		name: '3',
		img: 'static/img/3.png'
	},
	{
		name: '4',
		img: 'static/img/4.png'
	}];




const msginfo = document.querySelector('.info');
var cardOne = -1;
var cardsChosen = [];
var cardsChosenID = [];
var cardsChosenWon = [];
var timer = 0;
var counter = 0;
var myRecord = 0;
var lastRecord = 0;

function createBoard() {
	const grid = document.getElementById('grid');
	cardArray.sort(() => 0.5 - Math.random());
	for (let i = 0; i < cardArray.length; i++){
		var card = document.createElement('img');
		card.setAttribute('src', 'static/img/question.png');
		card.setAttribute('width', '150px');
		card.setAttribute('height', '150px');
		card.setAttribute('data-id', i);
		card.addEventListener('click', flipCard);
		grid.appendChild(card);
	}

	document.getElementById('info-div').remove();

	var btn = document.createElement('div');
	btn.setAttribute('class', 'info');
	btn.setAttribute('id', 'info-div');
	btn.innerHTML = "<button class='btn btn-primary'>STATUS</button>";
	document.getElementById('container-div').appendChild(btn);
}


function clearBoard() {
	document.getElementById('informer-id').remove();

	var griddiv = document.createElement('div');
	griddiv.setAttribute('id', 'grid');
	griddiv.setAttribute('class', 'grid');
	document.getElementById('container-div').appendChild(griddiv);

	var record = document.createElement('div');
	record.setAttribute('id', 'records');
	record.setAttribute('class', 'records');
	record.innerHTML = "<h5 id = 'record'>RECORD: " + myRecord + "</h5><h5 id = 'lastrecord'>LAST TIME: " + lastRecord + "</h5> ";
	document.getElementById('container-div').appendChild(record);

	var timerdiv = document.createElement('div');
	timerdiv.setAttribute('id', 'timer-div');
	timerdiv.innerHTML = "<h4 id='timer'>0ms</h4>";
	document.getElementById('container-div').appendChild(timerdiv);

	createBoard();

}

/* flip card */

function flipCard() {
	var cardID = this.getAttribute('data-id');
	if(cardID === -1) return (false);
	if(cardOne === cardID) return (false);

	cardOne = cardID;
	cardsChosen.push(cardArray[cardID].name);
	cardsChosenID.push(cardID);
	this.setAttribute('src', cardArray[cardID].img);

	if(timer === 0){
		counter = setInterval(function(){
			document.getElementById('timer').innerHTML=" " + timer + " miliseconds";
			timer += 1;
		},1);
	}

	if (cardsChosen.length === 2) {
		setTimeout(checkForMatch, 300);
	}
}

/* check match */

function checkForMatch() {
	var cards = document.querySelectorAll('img');
	const optionOneID = cardsChosenID[0];
	const optionTwoID = cardsChosenID[1];

	if(cardsChosen[0] === cardsChosen[1]) {
		document.getElementById('info-div').remove();

		var btn = document.createElement('div');
		btn.setAttribute('class', 'info');
		btn.setAttribute('id', 'info-div');
		btn.innerHTML = "<button class='btn btn-success'>TRUE</button>";
		document.getElementById('container-div').appendChild(btn);

		cards[optionOneID].setAttribute('src', 'static/img/blank.png');
		cards[optionOneID].setAttribute('data-id', '-1');
		cards[optionTwoID].setAttribute('src', 'static/img/blank.png');
		cards[optionTwoID].setAttribute('data-id', '-1');
		cardsChosenWon.push(cardsChosen);
	}
	else {
		document.getElementById('info-div').remove();

		var btn = document.createElement('div');
		btn.setAttribute('class', 'info');
		btn.setAttribute('id', 'info-div');
		btn.innerHTML = "<button class='btn btn-danger'>FALSE</button>";
		document.getElementById('container-div').appendChild(btn);

		cards[optionOneID].setAttribute('src', 'static/img/question.png');
		cards[optionTwoID].setAttribute('src', 'static/img/question.png');
	}

	cardsChosen = [];
	cardsChosenID = [];
	if (cardsChosenWon.length === cardArray.length/2){
		clearInterval(counter);
		const grid = document.getElementById('grid');
		grid.remove();
		document.getElementById('info-div').remove();
		document.getElementById('timer-div').remove();
		document.getElementById('record').remove();
		document.getElementById('lastrecord').remove();

		if (timer < myRecord || myRecord === 0){
			myRecord = timer;
		}
		lastRecord = timer;

		timer = 0;
		var newdiv = document.createElement('div');
		newdiv.setAttribute('id', 'informer-id');
		newdiv.innerHTML = "<h1 style='padding:20px; border: 2px solid black;'>YOUR FINISHED GAME. RESULT " + myRecord + " MILISECONDS</h1><button class='btn btn-success' onclick='clearBoard();'>NEW GAME</button>";
		document.getElementById('container-div').appendChild(newdiv);

		var info = document.createElement('div');
		info.setAttribute('id', 'info-div');
		info.setAttribute('class', 'info');

		document.getElementById('container-div').appendChild(info);

		cardsChosenWon = [];

	}
}
