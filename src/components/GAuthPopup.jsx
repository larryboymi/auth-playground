import React from 'react'
import firebase from 'firebase'
import Button from 'react-bootstrap/lib/Button'

const config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    storageBucket: "",
};
const testApp = firebase.initializeApp(config);

const provider = new firebase.auth.GithubAuthProvider()


const handler = () =>
  testApp.auth().signInWithPopup(provider).then((result) => {
    // This gives you a GitHub Access Token. You can use it to access the GitHub API.
    var token = result.credential.accessToken;
  // The signed-in user info.
    var user = result.user;
    console.log(JSON.stringify(result, null, 2))
  // ...
  })
  .catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
    console.log('The error is ' + JSON.stringify(error))
  })

module.exports = (props) => <Button onClick={handler}>HOWDY</Button>
