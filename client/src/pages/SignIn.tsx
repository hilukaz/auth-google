import './styles.scss'
import axios from 'axios';
import {  GoogleAuthProvider, signInWithPopup, User} from "firebase/auth";
import {auth} from "../../../server/src/Api/Service"
import { useState } from 'react';

export function SignIn(){
    /*function back(){
        axios.post('localhost:3000/auth', {
            
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

    }*/
    
    const [user,setUser]=useState<User>({} as User)

    function handleGoogle(){
      const provider=new GoogleAuthProvider

      signInWithPopup(auth,provider).then((result)=>{
        setUser(result.user)
        axios.post('localhost:3000/auth', {
            
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });

      })
      .catch((error)=>{
        console.log(error)
      })
    }

    return(
        <div className='container'>
            <div className="user">
              {user.photoURL && <img src={user.photoURL} alt="sa" />}
              <strong>{user.displayName}</strong>

            </div>
            <h1>Acesse sua conta</h1>

            <button type="button" className="button" onClick={handleGoogle}>
                Entrar com google
            </button>
        </div>
    )
}