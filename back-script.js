import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js";
import {
  getDatabase,
  ref,
  get,
  set,
  child,
  update,
  push,
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
function stringify(name){
  return name;
}
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();
function register() {
  
  const formData = document.forms["Regform"];
  var NAME = formData["Email"].value;
  var PASS = formData["Password"].value;
  // var JSONData = `[{ sds: {email: ${NAME},pass: ${PASS}}}]`;
  // JSONData=JSONData.replace('sds',`${NAME}`);
  update(ref(db, `/${NAME}`), { 
    Name:NAME,
    Pass:PASS
   }
  ).then(() => {
    window.location.replace('Dashboard.html');
  });
}
document.getElementById("submit").addEventListener("click", () => {
  register();
});

// function dataADD{
// }
