alert('Welcome to The Illuminati!');

const key = document.querySelector('#input');

key.onclick = function go() {
	let secret = document.getElementById("phrase").value;

	if (secret === '123') {
		alert('Welcome to The Underground Railroad Network!');
		window.open('secret.html', '_self');

	} else {
		document.documentElement.scrollTop = 0;
	}

}

