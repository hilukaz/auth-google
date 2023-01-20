import {req,res} from 'express'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'

export class Api{
    
    auth(req:req, res:res) {
        
    }
}
const firebaseConfig = {
    apiKey: "AIzaSyDwc9nsd5HvPGXpV7GAYgQCR5rh3xpFl30",
    authDomain: "auth-bfdb6.firebaseapp.com",
    projectId: "auth-bfdb6",
    storageBucket: "auth-bfdb6.appspot.com",
    messagingSenderId: "675389756582",
    appId: "1:675389756582:web:a1ae91e2baaa7ed2e91067",
    measurementId: "G-EX5PK5KN32"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);