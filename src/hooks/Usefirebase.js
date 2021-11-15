
import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Login/Fairebase/Firebase.init";
import { getAuth, createUserWithEmailAndPassword ,signOut,onAuthStateChanged,signInWithEmailAndPassword, signInWithPopup ,GoogleAuthProvider , updateProfile  } from "firebase/auth";


// initialize firebse app

initializeFirebase();
const useFirebase = () => {
    const [user , setUser] = useState({});
    const [isLoading , setIsLoading ] = useState(true);
    const [authError , setAuthError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email , Password, history,name ) => {
        setIsLoading(true);

        createUserWithEmailAndPassword(auth , email, Password)

        .then((userCredential) => {

    const user = userCredential.user;
    
    const newUser = {email , displayName : name};

          setUser(newUser);

// send name to firebase after creation

          updateProfile(auth.currentUser, {
            displayName: name
          }).then(() => {
            
          }).catch((error) => {
           
          });
          history.replace('/');
        
          })
          .catch((error) => {
          
             setAuthError(error.message);
            
          })
          .finally(() => setIsLoading(false));
          
    }
    

    // login user


    const loginUser = (email, Password , location , history) => {
      setIsLoading(true);

      signInWithEmailAndPassword (auth , email, Password)
      .then((userCredential) => {
          
    const destination =  location?.state?.from || '/';
          history.replace(destination);
          setAuthError('');           

          })
          .catch((error) => {
          
            setAuthError(error.message);
            
          })
          .finally(() => setIsLoading(false));
    }


    // observer user state

    const signInwithGoogle = ( location , history) => {
      setIsLoading(true);

      signInWithPopup(auth, googleProvider)
      .then((result) => {

    const credential = GoogleAuthProvider.credentialFromResult(result);
   
    const user = result.user;
      setAuthError('');

    
  }).catch((error) => {
    setAuthError(error.message);
    
  }).finally(() => setIsLoading(false));

    }

   useEffect(()=>{
 const unsubscribe=   onAuthStateChanged(auth, (user) => {
        if (user) {
         
         setUser(user);
        } else {
         setUser({})
        }
        setIsLoading(false);
      });
      return () => unsubscribe;
   } ,[])

    const logOut = () =>{
        signOut(auth).then(() => {
            
          }).catch((error) => {
            
          })
          .finally(() => setIsLoading(false));
    }
    return{
        user,
        isLoading,
        authError,
        registerUser,
        signInwithGoogle,
        logOut,
        loginUser,
    }
}

export default useFirebase;