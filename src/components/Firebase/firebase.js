import firebaseConfig from "./config";
import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/functions";
import "firebase/storage";

app.initializeApp(firebaseConfig);

class Firebase {
  constructor() {
    if (!firebaseInstance) {
      this.auth = app.auth();
      this.db = app.firestore();
      this.functions = app.functions();
      this.storage = app.storage();
    }
  }

  async getUserProfile({ userId }) {
    return this.db
      .collection("publicProfiles")
      .where("userId", "==", userId)
      .get();
  }

  async register({ email, password, username }) {
    const newUser = await this.auth.createUserWithEmailAndPassword(
      email,
      password
    );
    return this.db.collection("publicProfiles").doc(username).set({
      userId: newUser.user.uid,
    });
  }

  //   func realtime update, run anytime when query( .where("book", "==", bookRef) returns a new data)
  subscribeToBookCommens({ bookId, onSnapshot }) {
    // reference to particulary book
    const bookRef = this.db.collection("books").doc(bookId);

    return this.db
      .collection("comments")
      .where("book", "==", bookRef)
      .onSnapshot(onSnapshot);
  }

  async login({ email, password }) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  async logout() {
    await this.auth.signOut();
  }
}

let firebaseInstance;

function getFirebaseInstance() {
  if (!firebaseInstance) {
    firebaseInstance = new Firebase();
    return firebaseInstance;
  } else if (firebaseInstance) {
    return firebaseInstance;
  } else {
    return null;
  }
}

export default getFirebaseInstance;
