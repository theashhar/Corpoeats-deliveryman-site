// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
  apiKey: "AIzaSyAOHtnwq1sZtkomIAmOrChJF39d8JGfKA8",
  authDomain: "vendor-corpoeats.firebaseapp.com",
  projectId: "vendor-corpoeats",
  storageBucket: "vendor-corpoeats.appspot.com",
  messagingSenderId: "15884300266",
  appId: "1:15884300266:web:21e13775adb050077f0c93",
  measurementId: "G-9L3J20ZXZJ"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);
  
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  new Notification(notificationTitle, notificationOptions);
});