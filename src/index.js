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
 //trabajo cipher
  document.getElementById('work-one').addEventListener('click', function(){
    window.open('https://javieramontenegro.github.io/SCL009-Cipher/src/index.html');
}, false);
//trabajo data lovers
document.getElementById('work-two').addEventListener('click', function(){
    window.open('https://javieramontenegro.github.io/SCL009-data-lovers/src/index.html');
}, false);
//trabajo social network
document.getElementById('work-three').addEventListener('click', function(){
    window.open('https://javieramontenegro.github.io/SCL009-Social-Network/src/index.html');
}, false);
//a linkedlin
document.getElementById('linkedlin').addEventListener('click', function(){
    window.open('https://www.linkedin.com/in/javieramontenegro/');
}, false);
//a github
document.getElementById('github').addEventListener('click', function(){
    window.open('https://github.com/javieramontenegro');
}, false);
//a youtube
document.getElementById('youtube').addEventListener('click', function(){
    window.open('https://www.youtube.com/watch?v=fvZFOw44rwM');
}, false);
//a artstation
document.getElementById('artstation').addEventListener('click', function(){
    window.open('https://www.artstation.com/jumpygames');
}, false);
//IR A VISTA
document.getElementById('btn-portfolio').addEventListener('click', function(){
    let elmnt = document.getElementById("portfolio");
    elmnt.scrollIntoView();

});
document.getElementById('btn-resume').addEventListener('click', function(){
    let elmnt = document.getElementById("resume");
    elmnt.scrollIntoView();

});
document.getElementById('btn-contact').addEventListener('click', function(){
    let elmnt = document.getElementById("contact");
    elmnt.scrollIntoView();

});
//onclick="location.href='https://javieramontenegro.github.io/SCL009-Cipher/src/index.html';"