
function initMap() {
    var mapOptions = {
        zoom: 15,
        center: { lat: 40.68961985411178, lng: -74.01618003845215 }, // New York coordinates
        styles: [
            { featureType: 'water', stylers: [{ color: '#F2F2F2' }, { visibility: 'on' }] },
            { featureType: 'landscape', stylers: [{ color: '#FFFFFF' }] },
            { featureType: 'road', stylers: [{ saturation: -100 }, { lightness: 45 }] },
            { featureType: 'road.highway', stylers: [{ visibility: 'simplified' }] },
            { featureType: 'road.arterial', elementType: 'labels.icon', stylers: [{ visibility: 'off' }] },
            { featureType: 'administrative', elementType: 'labels.text.fill', stylers: [{ color: '#ADADAD' }] },
            { featureType: 'transit', stylers: [{ visibility: 'off' }] },
            { featureType: 'poi', stylers: [{ visibility: 'off' }] }
        ]
    };

    var mapElement = document.getElementById('googlemaps');
    var map = new google.maps.Map(mapElement, mapOptions);
}
