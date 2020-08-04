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
  // The location of Free States
	  var Indiana = {lat: 38.6175, lng: -86.3580};
	  var Ohio = {lat: 40.4173, lng: -82.9071};
	  var Michigan = {lat: 44.3148, lng: -85.6024};
	  var Iowa = {lat: 41.8780, lng: -93.0977};
	  var California = {lat: 36.7783, lng: -119.4179};
	  var Oregon = {lat: 43.8041, lng: -120.5542};
	var Pennsylvania = {lat: 41.2033, lng: -77.1945}
	var NewYork = {lat: 40.7128, lng: -74.0060}
	var Vermont = {lat: 44.5588, lng: -72.5778}
	var RhodeIsland = {lat: 41.5801, lng: -71.4774}
	var NewHampshire = {lat: 43.1939, lng: -71.5724}
	var Maine = {lat: 45.2538, lng: -69.4455}
	var Kansas = {lat: 39.0119, lng: -98.4842}
	var Illinois = {lat: 40.6331, lng: -89.3985}
	var Minnesota = {lat: 46.7296, lng: -94.6859} 
	var Wisconsin = {lat: 43.7844, lng: -88.7879}
	var Massachusetts = {lat: 42.4072, lng: -71.3824}
	var Connecticut = {lat: 41.6032, lng: -73.0877}
	var NewJersey = {lat: 40.0583, lng: -74.4057}

  



  // The map, centered at Alabama
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: Indiana, mapTypeId: google.maps.MapTypeId.SATELLITE});
  // The marker, positioned at Alabama
  var markerIndiana = new google.maps.Marker({position: Indiana, map: map});
  var markerOhio = new google.maps.Marker({position: Ohio, map: map});
  var markerMichigan = new google.maps.Marker({position: Michigan, map: map});
  var markerIowa = new google.maps.Marker({position: Iowa, map: map});
  var markerCalifornia = new google.maps.Marker({position: California, map: map});
  var markerOregon = new google.maps.Marker({position: Oregon, map: map});
  var markerPennsylvania = new google.maps.Marker({position: Pennsylvania, map: map});
  var markerNewYork = new google.maps.Marker({position: NewYork, map: map});
  var markerVermont = new google.maps.Marker({position: Vermont, map: map});
  var markerRhodeIsland = new google.maps.Marker({position: RhodeIsland, map: map});
  var markerNewHampshire = new google.maps.Marker({position: NewHampshire, map: map});
  var markerKansas = new google.maps.Marker({position: Kansas, map: map});
  var markerIllinois= new google.maps.Marker({position:Illinois, map: map});
  var markerMinnesota= new google.maps.Marker({position:Minnesota, map: map});
  var markerWisconsin = new google.maps.Marker({position: Wisconsin, map: map});
  var markerMassachusetts = new google.maps.Marker({position: Massachusetts, map: map});
  var markerConnecticut = new google.maps.Marker({position: Connecticut, map: map});
  var markerNewJersey = new google.maps.Marker({position: NewJersey, map: map});
}


function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
