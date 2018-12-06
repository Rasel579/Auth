import firebase from 'firebase';


const config = {
        apiKey: 'AIzaSyC3HD2Am5UO_ozpujSg2LBz6_0L-OcAqv4',
        authDomain: 'auth-f8484.firebaseapp.com',
        databaseURL: 'https://auth-f8484.firebaseio.com',
        projectId: 'auth-f8484',
        storageBucket: 'auth-f8484.appspot.com',
        messagingSenderId: '30811007698'
      };
const Firebase = firebase.initializeApp(config);


export default Firebase;