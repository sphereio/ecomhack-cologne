function initialize() {

      	var windowLatLng = new google.maps.LatLng(50.939723, 6.957856); // betahaus berlin
      	var mapCanvas = document.getElementById('map-location');

        var mapOptions = {
	        center: windowLatLng,
	        zoom: 13,
	        scrollwheel: false,
    			navigationControl: false,
    			mapTypeControl: false,
    			scaleControl: false,
	        mapTypeId: google.maps.MapTypeId.ROADMAP,
          draggable: false
        }
        var map = new google.maps.Map(mapCanvas, mapOptions);
        var contentString = '<div class="info-window">'+
        	'<h3>Solution Space Cologne</h3>'+
        	'<p>Am Hof 20-26, <br /> 50667 Köln<br>Germany</p>'+
        	'</div>';

		var infowindow = new google.maps.InfoWindow({
			content: contentString,
			maxWidth: 240
		});

        var marker = new google.maps.Marker({
		    position: windowLatLng,
		    map: map,
		    title: 'Hello World!',
		    show: true
		});

		google.maps.event.addListener(marker, 'click', function() {
			infowindow.open(map, marker);
		});

		google.maps.event.trigger(marker, 'click')

		marker.setVisible(false)

      }

      google.maps.event.addDomListener(window, 'load', initialize);
