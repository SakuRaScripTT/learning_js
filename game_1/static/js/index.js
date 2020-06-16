var pScore = 0;
var cScore = 0;
function game_1(choice) {
	 //>>
	var computerChoice = = randomToInt();
	var myChoice = choice.id;
	
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
	var score = 0;
	var compScore = 0;
	if(number === 3){
		return {'message': 'You lost!', 'color': 'red', score: -1, compScore: 1};
	}
	else if(number === 2){
		return {'message': 'You tied!', 'color': 'cyan', score: 0, compScore: 0};
	}
	else{
		return {'message': 'You won!', 'color': 'green', score: 1, compScore: -1};
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
	document.getElementById('score-div').remove();
	//>>
	var myDiv = document.createElement('div');
	var commputerDiv = document.createElement('div');
	var msgDiv = document.createElement('div');
	var buttonsdiv = document.createElement('div');
	var button = document.createElement('div');
	var end = document.createElement('end');
	var score = document.createElement('div');
	var compScore = document.createElement('div');
	//>>
	myDiv.setAttribute("id","result_1");
	commputerDiv.setAttribute("id","result_2");
	msgDiv.setAttribute("id","result_3");
	buttonsdiv.setAttribute("id","buttons-div");
	buttonsdiv.setAttribute("class","buttons");
	score.setAttribute("class", "score");
	score.setAttribute("id","score-div");
	compScore.setAttribute("class", "score");
	compScore.setAttribute("id","score-div2");
	//>>
	pScore += finalMessage['score'];
	cScore += finalMessage['compScore'];
	//>>
	myDiv.innerHTML = "<img src='" + images[myImg] + "' width='100' style='box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.7);padding:15px;'>";
	msgDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>";
	commputerDiv.innerHTML = "<img src='" + images[computerImg] + "' width='100' style='box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.7);padding:15px;'>";
	button.innerHTML = "<div><button class ='btn btn-success' onclick='NextRound();'>Next Round</button></div>";
	end.innerHTML = "<div><button class ='btn btn-danger''>Reset Game</button></div>";
	score.innerHTML = "<h5>SCORE: " + pScore + "</h5>";
	compScore.innerHTML = "<h5>COMPUTER: " + cScore + "</h5>";

	document.getElementById('flex-box-rps-div').appendChild(myDiv);
	document.getElementById('flex-box-rps-div').appendChild(msgDiv);
	document.getElementById('flex-box-rps-div').appendChild(commputerDiv);
	document.getElementById('container-div').appendChild(buttonsdiv);
	document.getElementById('buttons-div').appendChild(button);
	document.getElementById('buttons-div').appendChild(end);
	document.getElementById('container-div').appendChild(score);
	document.getElementById('score-div').appendChild(compScore);

}

//>>
function NextRound(){
	document.getElementById('result_1').remove();
	document.getElementById('result_2').remove();
	document.getElementById('result_3').remove();
	document.getElementById('buttons-div').remove();
	document.getElementById('flex-box-rps-div').remove();
	document.getElementById('score-div').remove();
	//>>
	var main = document.createElement('div');
	var rock = document.createElement('img');
	var paper = document.createElement('img');
	var scissors = document.createElement('img');
	var score = document.createElement('div');
	var compScore = document.createElement('div');

	//>>
	main.setAttribute("id","flex-box-rps-div");
	main.setAttribute("class","flex-box-rps");
	document.getElementById('container-div').appendChild(main);
	//>>
	rock.setAttribute("src","static/img/rock.jpg");
	rock.setAttribute("id", "rock");
	rock.setAttribute("width","100");
	rock.setAttribute("onclick","game_1(this)");
	document.getElementById('flex-box-rps-div').appendChild(rock);
	//>>
	paper.setAttribute("src","static/img/paper.jpg");
	paper.setAttribute("id", "paper");
	paper.setAttribute("width","100");
	paper.setAttribute("onclick","game_1(this)");
	document.getElementById('flex-box-rps-div').appendChild(paper);
	//>>
	scissors.setAttribute("src","static/img/scissors.jpg");
	scissors.setAttribute("id", "scissors");
	scissors.setAttribute("width","100");
	scissors.setAttribute("onclick","game_1(this)");
	document.getElementById('flex-box-rps-div').appendChild(scissors);
	//>>
	score.setAttribute("class", "score");
	score.setAttribute("id","score-div");
	score.innerHTML = "<h5>SCORE: " + pScore + "</h5>";
	document.getElementById('container-div').appendChild(score);
	//>>
	compScore.setAttribute("class", "score");
	compScore.setAttribute("id","score-div2");
	compScore.innerHTML = "<h5>COMPUTER: " + cScore + "</h5>";
	document.getElementById('score-div').appendChild(compScore);
}
