function terminateSession() {
	if(confirm('Please terminate the session using the button at the bottom after recieving the instructions. Understood?')) {
		window.load;
	} else {
		window.open("homepage.html", '_self')
	}


	
}


function terminate() {
	alert("May you find the Freedom you deserve. Goodluck!");
	window.open("homepage.html", "_self");
}


const link = document.getElementById('map_img')

function image() {
	if(link.onclick) {
		window.open('UGRR.jpg', '_blank');
	}
}


// Making the Map

// Initialize and add the map
function initMap() {
  // The location of Uluru
  var Alabama = {lat: 32.3182, lng: -86.9023};
  var neIndiana = {lat: 38.6175, lng: -86.3580};
  var india = {}


  // The map, centered at Alabama
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: Alabama, mapTypeId: google.maps.MapTypeId.HYBRID});
  // The marker, positioned at Alabama
  var markerAlabama = new google.maps.Marker({position: Alabama, map: map});
  var markerneIndiana = new google.maps.Marker({position: neIndiana, map: map});

}
