// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyDFQ7imPA8SOBNPqwyfGdRyTlFSA4yrPCU",
  authDomain: "users-86d13.firebaseapp.com",
  databaseURL: "https://users-86d13-default-rtdb.firebaseio.com",
  projectId: "users-86d13",
  storageBucket: "users-86d13.appspot.com",
  messagingSenderId: "655847487591",
  appId: "1:655847487591:web:d3ad8e45ffed18b5b93cc2",
  measurementId: "G-S8MB0CEJ48",
};

firebase.initializeApp(firebaseConfig);
const dbRef = firebase.database().ref();
const usersRef = dbRef.child("User");

var namee = document.getElementsByClassName("name");
var lastname = document.getElementsByClassName("lastname");
var age = document.getElementsByClassName("age");
usersRef.on("value", (snap) => {
  let user = snap.val();

  namee[0].innerHTML = user.name;
  lastname[0].innerHTML = user.lastname;
  age[0].innerHTML = user.age;
});
