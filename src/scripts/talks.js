(function showSpeakerProfile(){
  var speakers = document.getElementsByClassName('speaker-name');

  Array.prototype.forEach.call(speakers, function (speaker) {
    speaker.addEventListener('mouseover', showProfile);
    speaker.addEventListener('mouseleave', showProfile);
    speaker.addEventListener('click', showProfile);
  });

  function showProfile(event) {
    var currentIndex, currentElement, hasClass;
    currentIndex = event.target.dataset.index;
    currentElement = document.querySelector("[speaker='" + currentIndex + "']");

    if (currentElement.className.indexOf("active") === -1) {
      hasClass = true;
    }

    if (hasClass) {
      return currentElement.classList.add('active');
    }

    currentElement.classList.remove('active');
  }
})();
