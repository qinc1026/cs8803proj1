import app from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
const config = {
    apiKey: "AIzaSyB0wGmakoiS3_vAR3PNGVTFmNw-VNhbV10",
    authDomain: "cs8803-d077d.firebaseapp.com",
    databaseURL: "https://cs8803-d077d.firebaseio.com",
    projectId: "cs8803-d077d",
    storageBucket: "",
    messagingSenderId: "626445668972",
  };

  class Firebase {
    constructor() {
      app.initializeApp(config);
      this.auth = app.auth();
      this.db = app.database();
    }
  
    doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);
    doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);
    doSignOut = () => this.auth.signOut();
    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
    doPasswordUpdate = password =>
      this.auth.currentUser.updatePassword(password);
    // *** User API ***
    user = uid => this.db.ref(`users/${uid}`);
    users = () => this.db.ref('users');
}
export default Firebase;