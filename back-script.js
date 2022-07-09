import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js";
import {
  getDatabase,
  ref,
  get,
  set,
  child,
  update,
  remove,
} from "https://www.gstatic.com/firebasejs/9.6.3/firebase-database.js";
const firebaseConfig = {
  apiKey: "AIzaSyAXpdLMnPpeXo-LgpW-94orWVhrS4EGN-0",
  authDomain: "slash-key.firebaseapp.com",
  databaseURL: "https://slash-key-default-rtdb.firebaseio.com",
  projectId: "slash-key",
  storageBucket: "slash-key.appspot.com",
  messagingSenderId: "593448539333",
  appId: "1:593448539333:web:fd68e4d6c17f208bcc0cac",
  measurementId: "G-2QZGFD4552",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();
function add() {
  
  const formData = document.forms["Regform"];
  var NAME = formData["Email"].value;
  var PASS = formData["Password"].value;

  update(ref(db, "Student/"), {
    NAME: {
      name: NAME,
      pass: PASS,
    },
  }).then(() => {
    window.location.href='/Dashboard.html';
  });
}
document.getElementById("submit").addEventListener("click", () => {
  add();
});

function funda() {
  console.log("Akash Funda");
}
