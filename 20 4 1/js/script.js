//variablet että koodi toimii
var bgColor = document.querySelector(".js-bg-color")
var textColor = document.querySelector(".js-text-color")
var body = document.querySelector("body")

//taustan kuva vaihtuu
bgColor.addEventListener('keyup', function(event) {
  var color = event.target.value
  //määrittele eri värit jota voit käyttää 
  switch(color) {
    case 'red':
    case 'white':
    case 'blue':
      body.style.backgroundColor = color
      break
      //default eli se väri joka näkyy jos mitään ei ole syötetty
      default:
        body.style.backgroundColor = "white"
        break
  }
});
//tekstin väri vaihtuu
textColor.addEventListener('keyup', function(event) {
  body.style.color = event.target.value
});