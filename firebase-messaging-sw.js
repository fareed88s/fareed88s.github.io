//firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/8.2.9/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.9/firebase-messaging.js');
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyB4uwWSJx19m1HypB71Awnqzrj8U4gunD4",
      authDomain: "lat-pwa.firebaseapp.com",
      projectId: "lat-pwa",
      storageBucket: "lat-pwa.appspot.com",
      messagingSenderId: "103142684709",
      appId: "1:103142684709:web:e3f9c894fc970d62f427cc"
    };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  const messaging = firebase.messaging();
  messaging.onBackgroundMessage(function(payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    const notificationTitle = 'Background Message Title';
    const notificationOptions = {
      body: 'Background Message body.',
      icon: '/firebase-logo.png'
    };
  
    self.registration.showNotification(notificationTitle,
      notificationOptions);
  });