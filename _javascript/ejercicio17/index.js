let markers, map

function initMap() {
	const posicion = {
		lat: -25.363,
		lng: 131.044,
	}

	map = new google.maps.Map(document.getElementById('map'), {
		zoom: 4,
		center: posicion,
	})

	markers.push(
		new google.maps.Marker({
			position: {
				lat: 36.5787354,
				lng: -4.5634226,
			},
			map,
			title: 'Playa Bonita',
		})
	)
	markers.push(
		new google.maps.Marker({
			position: {
				lat: 36.5920591,
				lng: -4.564351,
			},
			map,
			title: 'Benalmadena',
		})
	)
	markers.push(
		new google.maps.Marker({
			position: {
				lat: 40.6971494,
				lng: -74.2598679,
			},
			map,
			title: 'New York',
		})
	)
}