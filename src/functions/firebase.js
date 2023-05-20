import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber  } from "firebase/auth";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { getDatabase, ref, update } from "firebase/database";
import Sound from "../assets/sound.mp3"
const event = new Event("new-order");

const firebaseConfig = {
  apiKey: "AIzaSyCvH7faWzCTidZEJzQWAN_srJ3-hCGhbmA",
  authDomain: "delivery-corpoeats.firebaseapp.com",
  projectId: "delivery-corpoeats",
  storageBucket: "delivery-corpoeats.appspot.com",
  messagingSenderId: "90227560297",
  appId: "1:90227560297:web:51dbabe5ac3156232e37f8",
  measurementId: "G-116R5SKEWP",
  databaseURL: "https://delivery-corpoeats-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);
const auth = getAuth(app);
const database = getDatabase(app);

export async function login(phoneNumber) {
    window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
        'size': 'invisible'
      }, auth);
      
    const appVerifier = window.recaptchaVerifier;
    let res = null
    try {
        res = await signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    } catch (error){
        res = error
    }
    return res
}

// 
export async function RegNotif() {
  getToken(messaging, { vapidKey: 'BOczY8hEJod5Qjliii4ZAoS8j0rNd1zjIHkQdFUEc4Jr5sWVC68amrBQ2zYDNK2kNIpuSlOlDLHy-6WqZKfubiM' }).then((currentToken) => {
    if (currentToken) {
      update(ref(database, 'users/' + auth.currentUser.uid), {
        notificationToken: currentToken
      })
    } else {
      // Show permission request UI
      console.log('No registration token available. Request permission to generate one.');
      console.log('Requesting permission...');
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        console.log('Notification permission granted.');
      } else {
        console.log('Unable to get permission to notify.');
        }
    });
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
  });
}
onMessage(messaging, (payload) => {
    console.log('Message received.', payload);
    const audio = new Audio(Sound);
  audio.play();
    dispatchEvent(event);
    const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  new Notification(notificationTitle, notificationOptions);
  showNotification(notificationTitle,notificationOptions);
  });

export function isLogged(){
    let res = null
    try {
        res = auth.currentUser
        console.log(res)
    } catch (error){
        res = error
    }
    return res
}

export function logout(){
    let res = null
    try {
        res = auth.signOut()
    } catch (error){
        res = error
    }
    return res
}

navigator.serviceWorker.register("sw.js");

function showNotification(notificationTitle,notificationOptions) {
  Notification.requestPermission((result) => {
    if (result === "granted") {
      navigator.serviceWorker.ready.then((registration) => {
        registration.showNotification(notificationTitle, notificationOptions);
        registration.addEventListener('notificationclick', (event) => {
          event.notification.close();
          window.open('https://delivery-corpoeats.web.app/');
        })
      });
    }
  });
  
}

  
