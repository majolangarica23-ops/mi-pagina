const firebaseConfig = {
  apiKey: "AIzaSyBgDAIWIdSxC672y6kan7FSMqhUY0cs3qY",
  authDomain: "clima-81c8c.firebaseapp.com",
  databaseURL: "https://clima-81c8c-default-rtdb.firebaseio.com",
  projectId: "clima-81c8c",
  storageBucket: "clima-81c8c.firebasestorage.app",
  messagingSenderId: "828041702715",
  appId: "1:828041702715:web:3b992c95fcc05387661b1e"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database(); 

// Temperatura
database.ref("/Sensores/AHT20/Temperatura").on('value', function(snapshot) {
    let temp = snapshot.val();
    if(temp != null){
        document.getElementById("TemperaturaId").innerHTML = temp.toFixed(2) + " °C";
        console.log("Temperatura:", temp);
    }
});

// Humedad
database.ref("/Sensores/AHT20/Humedad").on('value', function(snapshot) {
    let hum = snapshot.val();
    if(hum != null){
        document.getElementById("HumedadId").innerHTML = hum.toFixed(2) + " %";
        console.log("Humedad:", hum);
    }
});

// Presión
database.ref("/Sensores/BMP280/Presion").on('value', function(snapshot) {
    let pres = snapshot.val();
    if(pres != null){
        document.getElementById("PresionId").innerHTML = pres.toFixed(0) + " hPa";
        console.log("Presión:", pres);
    }
});



 
