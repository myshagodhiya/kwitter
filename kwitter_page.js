var firebaseConfig = {
        apiKey: "AIzaSyB21Z7DLacmTEjUaH1QK1kakVmlUxPEWyY",
        authDomain: "kwitter-7c432.firebaseapp.com",
        projectId: "kwitter-7c432",
        storageBucket: "kwitter-7c432.appspot.com",
        messagingSenderId: "506741456655",
        appId: "1:506741456655:web:7caf57fa160bb8d851087a"
      };
      
  
    firebase.initializeApp(firebaseConfig);
      user_name = localStorage.getItem("user_name");
      room_name = localStorage.getItem("room_name");
  
  function send()
  {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
     });
  
    document.getElementById("msg").value = "";
  }
