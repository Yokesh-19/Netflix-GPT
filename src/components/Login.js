import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';



const Login = () => {
    const [isSignInForm,setIsSignInForm] = useState(true);
    const [errormsg,setErrormsg] = useState(null);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null); //used to refereence fields
  
    const handleButtonClick = () =>{
      //Validate the form data

      const msg = checkValidData(email.current.value, password.current.value);
      setErrormsg(msg);

      if(msg)
      {
        return;
      }

      if(!isSignInForm)
      {
        //Sign Up Logic
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, photoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIzeH_49WDYWLLiVjj3ApCUp_0DgfyNB4dgQ&s"
          }).then(() => {
             const {uid, email, displayName, photoURL} = auth .currentUser;
             dispatch(
              addUser({
                uid:uid, 
                email:email, 
                displayName:displayName, 
                photoURL:photoURL
              })
            );
             navigate("/browse");
          }).catch((error) => {
            setErrormsg(error.message);
          });
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrormsg(errorCode + " - "+errorMessage);
        });
      }
      else
      {
          //
          signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
              // Signed in 
              const user = userCredential.user;
              console.log(user);
              navigate("/browse");
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrormsg(errorCode + " - "+errorMessage);
            });
      }



    }

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);       //togglefeature
    }

  return (
    <div>
        <Header/>
        <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/37372b0c-16ef-4614-9c66-f0464ffe4136/web/IN-en-20260216-TRIFECTA-perspective_74aa38a5-f527-417e-a604-a039567a350b_large.jpg' alt='backgroundImg'/>
        </div>
        <form  onSubmit={(e) => e.preventDefault()}   className=' w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
            <h1 className='font-bold text-3xl'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>

            {!isSignInForm && 
            (<input ref={name} type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700'/>)
            }

            <input 
             ref={email}
            type='text' 
            placeholder='Email Address' 
            className='p-4 my-4 w-full bg-gray-700'/> 

            <input
             ref={password}
            type='password' 
            placeholder='Password' 
            className='p-4 my-4 w-full bg-gray-700'/>

            <p className='text-red-500'>{errormsg}</p>
            
            <button  onClick={handleButtonClick} className='p-4 my-6 bg-red-700 w-full'>
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>

            <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
              {isSignInForm ? "New to Netflix? Sign Up Now" : "Already a registered? SignIn Now "}
              
              </p>
        </form>
    </div>
  )
}

export default Login