import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";

const app = initializeApp({
  apiKey: "AIzaSyDXWSTTKUoUZFffRMP4vQLf5uwVvKaOiYw",
  authDomain: "js-webfest.firebaseapp.com",
  projectId: "js-webfest",
  storageBucket: "js-webfest.appspot.com",
  messagingSenderId: "413102625971",
  appId: "1:413102625971:web:3aade7cd1e9a9190c58cc6"
});
const auth = getAuth();

onAuthStateChanged(auth, (user) => {
  if (!user) {
    document.body.style.display = "none";
    var name1 = 'SignIn Required  To Use This Page'
    document.write('<p class="style1">' + name1 + '</p>');
    var gg = document.querySelector('.style1');
    gg.setAttribute("style", "font-weight: bold; font-size: 4rem; color: red; text-align: center;");
    var name2 = 'Go Back To Login Screen?'
    document.write('<a href="login.html" class="style2">' + name2 + '</a>');
    var hh = document.querySelector('.style2')
    hh.setAttribute("style", "font-weight: bold; font-size: 2.5rem; text-align: center; color: black;");
  }
});

var btn = document.getElementById('logout').addEventListener('click', function (e) {
  auth.signOut().then(function () {
    // console.log('Signed Out');
    window.location.href = 'login.html'
  }, function (error) {
    console.error('Sign Out Error', error);
  });

  // Now Show Data In Card Form

});
var list = [];
var title = document.getElementById('title').value;
var description = document.getElementById('description').value;
var link = document.getElementById('link').value;
var btnAdd = document.getElementById('btn');
var cardData = document.getElementById('cardData');

btnAdd.addEventListener('click', (e)=> {
  // e.preventDefault();
 console.log(title , description , link)
  addCards();
 
});

function addCards(){

// var title = document.getElementById('title');
// var description = document.getElementById('description');
// var link = document.getElementById('link');

if(title.value == '' && description.value == '' && link.value == ''){
  swal("Oops!", "Empty Fields Not Allowed!" ,"warning");
}
else{

  var cards = {
    title: title.value,
    description: description.value,
    link: link.value,
  }
  list.push(cards)
  showCards();
}
  
function showCards(){

  showCards.innerHtml = '';

  // list.forEach(function(index){
  //   showCards.innerHtml += '<li id=main' + index + >'
  // });

}

  
  
  
  
 
}















