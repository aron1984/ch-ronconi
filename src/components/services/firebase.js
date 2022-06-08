import firebase from 'firebase/compat/app'

import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCgaGBjY0Qzw39W24HKignCjvijQ9gt3l4",
    authDomain: "coderhouse-ecommerce-3cad8.firebaseapp.com",
    projectId: "coderhouse-ecommerce-3cad8",
    storageBucket: "coderhouse-ecommerce-3cad8.appspot.com",
    messagingSenderId: "347543528053",
    appId: "1:347543528053:web:6d7ce4b9def8da288b0e3c"
};

const app = firebase.initializeApp(firebaseConfig)

export const getFirestore = () => {
    return firebase.firestore(app);
}






