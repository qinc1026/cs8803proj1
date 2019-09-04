import app from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
const config = {
    apiKey: "AIzaSyA_ow4mw0HoRmrlhqeMMBUC-LocdyQznzc",
    authDomain: "myfitness-696c2.firebaseapp.com",
    databaseURL: "https://myfitness-696c2.firebaseio.com",
    projectId: "myfitness-696c2",
    storageBucket: "",
    messagingSenderId: "680315578242",
    appId: "1:680315578242:web:19be07bd9fbe719f"
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