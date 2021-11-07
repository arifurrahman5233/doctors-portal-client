import { Password } from "@mui/icons-material";
import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Login/Fairebase/Firebase.init";
import { getAuth, createUserWithEmailAndPassword ,signOut,onAuthStateChanged } from "firebase/auth";


// initialize firebse app

initializeFirebase();
const useFirebase = () => {
    const [user , setUser] = useState({});

    const auth = getAuth();


    const registerUser = (email , Password ) => {
        createUserWithEmailAndPassword(auth , email, Password)
        .then((userCredential) => {
            
            const user = userCredential.user;
        
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            
          });
    }
    
    const loginUser = (email, Password) => {

    }


    // observer user state


   useEffect(()=>{
 const unsubscribe=   onAuthStateChanged(auth, (user) => {
        if (user) {
         
          const uid = user.uid;
         setUser(user);
        } else {
         setUser({})
        }
      });
      return () => unsubscribe;
   } ,[])

    const logOut = () =>{
        signOut(auth).then(() => {
            
          }).catch((error) => {
            
          })
    }
    return{
        user,
        registerUser,
        logOut,
        loginUser,
    }
}

export default useFirebase;