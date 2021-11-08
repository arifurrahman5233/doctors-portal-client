
import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Login/Fairebase/Firebase.init";
import { getAuth, createUserWithEmailAndPassword ,signOut,onAuthStateChanged,signInWithEmailAndPassword  } from "firebase/auth";


// initialize firebse app

initializeFirebase();
const useFirebase = () => {
    const [user , setUser] = useState({});
    const [isLoading , setIsLoading ] = useState(true);
    const [authError , setAuthError] = useState('');

    const auth = getAuth();
    const registerUser = (email , Password ) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth , email, Password)
        .then((userCredential) => {
            const user = userCredential.user;
          setAuthError('');
        
          })
          .catch((error) => {
          
             setAuthError(error.message);
            
          })
          .finally(() => setIsLoading(false));
          
    }
    
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
        logOut,
        loginUser,
    }
}

export default useFirebase;