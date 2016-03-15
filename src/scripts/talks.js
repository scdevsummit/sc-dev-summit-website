(function toggleSpeakerProfile () {
  var speakers = document.getElementsByClassName('speaker-name')

  Array.prototype.forEach.call(speakers, function (speaker) {
    speaker.addEventListener('mouseover', toggleProfile)
    speaker.addEventListener('mouseleave', toggleProfile)
    speaker.addEventListener('touchstart', toggleProfile)
  })

  function toggleProfile (event) {
    var currentIndex, currentElement
    currentIndex = event.target.dataset.index
    currentElement = document.querySelector('[speaker="' + currentIndex + '"]')

    if ((currentElement.className.indexOf('active') >= 0) || (event.type === 'mouseleave')) {
      return currentElement.classList.remove('active')
    }
    currentElement.classList.add('active')
  }
})()
