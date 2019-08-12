// FUNCION PARA LOGO
function imageChange(x) {
    if (x.matches) { // If media query matches
        document.getElementById('my-name').src = "./assets/img/name_2.jpg";
     } else {
        document.getElementById('my-name').src = "./assets/img/name.jpg";
   }
  }
  
  var x = window.matchMedia("(max-width: 600px)")
  imageChange(x) // Call listener function at run time
  x.addListener(imageChange) // Attach listener function on state changes

  //ABRE ENLACES
  document.getElementById('work-one').addEventListener('click', function(){
    window.open('https://javieramontenegro.github.io/SCL009-Cipher/src/index.html');
}, false);

document.getElementById('work-two').addEventListener('click', function(){
    window.open('https://javieramontenegro.github.io/SCL009-data-lovers/src/index.html');
}, false);

document.getElementById('work-three').addEventListener('click', function(){
    window.open('https://javieramontenegro.github.io/SCL009-Social-Network/src/index.html');
}, false);

//IR A VUSTA
document.getElementById('btn-portfolio').addEventListener('click', function(){
    let elmnt = document.getElementById("portfolio");
    elmnt.scrollIntoView();

});
document.getElementById('btn-resume').addEventListener('click', function(){
    let elmnt = document.getElementById("resume");
    elmnt.scrollIntoView();

});

//onclick="location.href='https://javieramontenegro.github.io/SCL009-Cipher/src/index.html';"