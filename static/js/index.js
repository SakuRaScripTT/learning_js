// Your Age in Days

function ageDays(){
	var brithdayYear = prompt('What year were you born?');
	var result = (2020 - brithdayYear) * 365
	//>>
	var h1 = document.createElement('h1');
	var answer = document.createTextNode('You are ' + result + ' days old.');

	h1.setAttribute('id', 'ageDays');
	h1.appendChild(answer);
	//>>

	document.getElementById('flex-box-result').appendChild(h1);
}


function buttonReset(){
	document.getElementById('ageDays').remove();
}