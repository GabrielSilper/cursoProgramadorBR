// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA9A_KMGLEDzOgYmK-_Ku7aDyJXkDKJ8gc",
    authDomain: "colegio-c5d5d.firebaseapp.com",
    projectId: "colegio-c5d5d",
    storageBucket: "colegio-c5d5d.appspot.com",
    messagingSenderId: "637122069934",
    appId: "1:637122069934:web:b63a578b2de4b5645c343f",
    measurementId: "G-JYYM0DWBB2"
  };


  
let db = firebaseConfig.firestore();
db.collections("turmaA").get().then(
    (snapshot)=>{
        snapshot.forEach((doc) => {
            console.log(doc);
        });
    }
)
