import { useState } from "react";
import initializeFirebase from "../Pages/Login/Login/Fairebase/Firebase.init";


// initialize firebse app

initializeFirebase();
const useFirebase = () => {
    const [user , setUser] = useState({});

    return{
        user,
    }
}

export default useFirebase;