;(function (win, doc) {
  win.initMap = function () {
    var google = window.google
    var marker = function (options) {
      return new google.maps.Marker(options)
    }

    var map = new google.maps.Map(doc.getElementById('map'), {
      center: {lat: -26.252893, lng: -48.850912},
      scrollwheel: false,
      zoom: 16
    })

    marker({
      position: {lat: -26.251873, lng: -48.855675},
      map: map,
      name: 'Univille'
    })
  }
})(window, document)
