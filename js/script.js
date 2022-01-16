let menu = document.querySelector('#menu-bar');
let nav = document.querySelector('.nav');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    nav.classList.toggle('active');
}

window.onscroll = () =>{

    menu.classList.remove('fa-times');
    nav.classList.remove('active');

}
clickCounter(); //Tek pjesa e dergimit te mesazhit
    
function clickCounter() {
  if (localStorage.clickcount) {
    localStorage.clickcount = Number(localStorage.clickcount)+1;
  } else {
    localStorage.clickcount = 1;
  }
}

