// GIF Genrator

function GiveGif(){
	var image = document.createElement('img');
	var div = document.getElementById('flex-generator');

	image.src = "https://api.thecatapi.com/api/images/get?format=src&type=gif&size=small";
	image.id = "slika";
	div.appendChild(image);
}


function DeleteGif(){
	var div = document.getElementById('slika');
	div.remove();

}