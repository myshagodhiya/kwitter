// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB21Z7DLacmTEjUaH1QK1kakVmlUxPEWyY",
  authDomain: "kwitter-7c432.firebaseapp.com",
  projectId: "kwitter-7c432",
  storageBucket: "kwitter-7c432.appspot.com",
  messagingSenderId: "506741456655",
  appId: "1:506741456655:web:7caf57fa160bb8d851087a"
};

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function addroom(){
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({purpose:"adding room_name"});
localStorage.setItem("Room_names", Room_names) ; 
window.location= "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room_name- " +Room_names);
      row= "<div class='room_name' id=" +Room_names+ "onclick='redirectToRoomName(this.id)'> #" +Room_names+ "</div> <hr>";
      document.getElementById("output").innerHTML += row;
   //End code

      });});}
getData();

function redirectToRoomName(name) {
  console.log (name);
  localStorage.setItem("room_name", name);
  window.location= "kwitter_page.html";
}
