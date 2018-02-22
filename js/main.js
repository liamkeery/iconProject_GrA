(() => {
  console.log('Fired!');

  var iconSet = document.querySelectorAll('svg');

  iconSet.forEach(icon => icon.addEventListener('click',logThisIcon));

  function logThisIcon() {
    console.log('clicked on this icon: ', this.id);
  }
})();
