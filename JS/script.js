/*

MOBILE MENU 

*/
// get elements into variables by their IDs
var navigation = document.getElementById("navigation-bar");
var openMenu = document.getElementById("open-menu");
var closeMenu = document.getElementById("close-menu");

// add event listeners to interactive elements
openMenu.addEventListener('click', toggleTheMenu);
closeMenu.addEventListener('click', toggleTheMenu);

// the event for the event listeners
function toggleTheMenu() {
  navigation.classList.toggle('hidden-nav');
}