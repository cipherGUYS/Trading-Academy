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
const newCache = await caches.open('new-cache');
function register() {
  
  const formData = document.forms["Regform"];
  var NAME = formData["Email"].value;
  var PASS = formData["Password"].value;
  // var JSONData = `[{ sds: {email: ${NAME},pass: ${PASS}}}]`;
  // JSONData=JSONData.replace('sds',`${NAME}`);
  update(ref(db, `/${NAME}`), { 
    Name:NAME,
    Pass:PASS,
    Money:1000,
    Email: "not provided",
    Phone: "not provided",
    Dob: "not provided",
    Lvl:"0"
   }
  ).then(() => {
    get(child(ref(db), `${NAME}/`)).then((data) => {
    console.log(data.val());
  //   newCache.put('/user.json', new Response(`${data.val()}`))
  //   console.log("hi");
  //   const reQuest = '/user.json';
  //   const response = newCache.match(reQuest);
  //   console.log(response);
  window.location.replace('/profile.html');
   });
  });
}
if(document.getElementById("submit")){
  document.getElementById("submit").addEventListener("click", () => {
    register();
  });
}
function profile(){
  console.log("hi");
  get(child(ref(db), `admin/`)).then((data) => {
    console.log(data.val(),"hello");
    document.getElementById('urName').innerText= `Name : ${data.val().Name}`;
    document.getElementById('urEmail').innerText= `Email : ${data.val().Email}`;
    document.getElementById('urDob').innerText= `DOB : ${data.val().Dob}`;
    document.getElementById('urLvl').innerText= `Level : ${data.val().Lvl}`;
    document.getElementById('urBal').innerText= `Balance : ${data.val().Money}`;
   });

}
function waiting(){
  if(document.getElementById('urBal')){
    profile()
  }
  else{
    setTimeout(()=>{waiting();},1000);
  }
}
function dataADD(){
  const  formData = document.forms["DetailForm"];
  var uname = formData.uname.value;
  var Nama = formData.Name.value;
  var email= formData.email.value;
  var phone= formData.phone.value;
  var dob = formData.date.value;
  update(ref(db, `/admin`), { 
    Name: Nama,
    Email: email,
    Phone: phone,
    Dob: dob
   }
  ).then(() => {
    document.getElementById('msg').innerText="Data updated succesfully";
    get(child(ref(db), `admin/`)).then((data) => {
      console.log(data.val());
      document.getElementById('urName').innerText= `Name : ${data.val().Name}`;
      document.getElementById('urEmail').innerText= `Email : ${data.val().Email}`;
      document.getElementById('urDob').innerText= `DOB : ${data.val().Dob}`;
      document.getElementById('urLvl').innerText= `Level : ${data.val().Lvl}`;
      document.getElementById('urBal').innerText= `Balance : ${data.val().Money}`;
     });
    setTimeout(()=>{document.getElementById('msg').innerText="";},2000)

  });
}
if(document.getElementById("profile_update")){
  document.getElementById("profile_update").addEventListener("click", () => {
    dataADD();
  });
}
waiting();
