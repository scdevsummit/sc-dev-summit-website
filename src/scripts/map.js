function initMap () { // eslint-disable-line no-unused-vars
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -26.252893, lng: -48.850912},
    scrollwheel: false,
    zoom: 16
  })

  var marker = new google.maps.Marker({ // eslint-disable-line no-unused-vars
    position: {lat: -26.251873, lng: -48.855675},
    map: map,
    name: 'Univille'
  })
}
