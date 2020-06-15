function game_1(choice) {
	 //>>
	var computerChoice,myChoice;

	myChoice = choice.id;
	computerChoice = randomToInt();
	
	//>>
	computerChoice = ComputerChoice(computerChoice);

	result = getWiner(myChoice,computerChoice);
	message = finalMessage(result);

	gameEnd(myChoice,computerChoice,message);

}

function randomToInt() {
	return Math.floor(Math.random() * 3)
}


function ComputerChoice(num){
	return ['rock', 'paper', 'scissors'][num];
}


function getWiner(myChoice,computerChoice){
	var results = {
		'rock': {'scissors': 1,'rock': 2, 'paper': 3},
		'paper': {'rock': 1, 'paper': 2, 'scissors': 3},
		'scissors': {'paper': 1, 'scissors': 2, 'rock': 3},
	};

	var yourScore = results[myChoice][computerChoice];
	var computerScore = results[computerChoice][myChoice];
	//>>
	return [yourScore, computerScore];
}

function finalMessage([number,computer]){
	if(number === 3){
		return {'message': 'You lost!', 'color': 'red'};
	}
	else if(number === 2){
		return {'message': 'You tied!', 'color': 'cyan'};
	}
	else{
		return {'message': 'You won!', 'color': 'green'};
	}
}

function gameEnd(myImg, computerImg, finalMessage){
	var images = {
		'rock': document.getElementById('rock').src,
		'paper': document.getElementById('paper').src,
		'scissors': document.getElementById('scissors').src
	};

	//>>
	document.getElementById('rock').remove();
	document.getElementById('paper').remove();
	document.getElementById('scissors').remove();

	//>>
	var myDiv = document.createElement('div');
	var commputerDiv = document.createElement('div');
	var msgDiv = document.createElement('div');
	var button = document.createElement('div');
	var end = document.createElement('end');
	//>>
	myDiv.innerHTML = "<img src='" + images[myImg] + "' width='100' id='result_1' style='box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.7);padding:15px;'>";
	msgDiv.innerHTML = "<h1 id='result_2' style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>";
	commputerDiv.innerHTML = "<img src='" + images[computerImg] + "' width='100' style='box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.7);padding:15px;'id='result_3'>";
	button.innerHTML = "<div><button id='result_4' class ='btn btn-success' onclick='NextRound();'>Next Round</button></div>";
	end.innerHTML = "<div><button id='result_5' class ='btn btn-danger''>Reset Game</button></div>";

	document.getElementById('flex-box-rps-div').appendChild(myDiv);
	document.getElementById('flex-box-rps-div').appendChild(msgDiv);
	document.getElementById('flex-box-rps-div').appendChild(commputerDiv);
	document.getElementById('buttons-div').appendChild(button);
	document.getElementById('buttons-div').appendChild(end);
}

//>>
function NextRound(){
	document.getElementById('result_1').remove();
	document.getElementById('result_2').remove();
	document.getElementById('result_3').remove();
	document.getElementById('result_4').remove();
	document.getElementById('result_5').remove();

	//>>
	var rock = document.createElement('div');
	var paper = document.createElement('div');
	var scissors = document.createElement('div');

	//>>
	rock.innerHTML = "<img src='static/img/rock.jpg' id='rock' width='100' onclick='game_1(this)'>";
	document.getElementById('flex-box-rps-div').appendChild(rock);
	paper.innerHTML = "<img src='static/img/paper.jpg' id='paper' width='100' onclick='game_1(this)'>";
	document.getElementById('flex-box-rps-div').appendChild(paper);
	scissors.innerHTML = "<img src='static/img/scissors.jpg' id='scissors' width='100' onclick='game_1(this)'>";
	document.getElementById('flex-box-rps-div').appendChild(scissors);


}
