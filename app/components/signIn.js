"use Context"
import { auth } from "../lib/firebase";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import {useContext, useEffect, useState} from "react";

//import { authContext } from "../lib/store/auth-context";

import {FcGoogle} from "react-icons/fc";
import { signInAnonymously } from "firebase/auth";

function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log(user.email);
                //...
            } else {
                // Usser is signed out
                // ...
            }
        });
    }, []);

    const signUp = async () => {
        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            console.log(userCredential.user.email);
        } catch (e) {
            console.log(e)
        }
    };

    const login = async () => {
        try {
            const userCredential = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );
            console.log(userCredential.user.email);
        } catch (e) {
            console.log(e)
        }
    };

    const logout = async () => {
        try { 
            await signOut(auth);
            console.log('signed out');
        } catch (e) {
            console.log(e)
        }
    }
    // const {googleLoginHandler} = useContext(authContext);
    // const {signIn, signUp} = useContext(authContext)
     return (
         <main className="container max-w-2xl px-6 mx-auto">
             <h1 className="mb-6 text-6xl font-bold text-center">Welcome 👋👋🏽👋🏾👋🏿</h1>

            <div className="flex flex-col overflow-hidden shadow-md shadow-slate-500 bg-slate-800 rounded-2xl">
                 <div className="h-52 m-2 p-2">
                    <input className="mx-2"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email"
                    />
                    <input className="mx-2"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="password"
                    />
                    <div className="flex flex-row m-2">
                    <button className="border rounded-xl  m-2 p-2" onClick={signUp}>SignUp</button>
                    <button className="border rounded-xl  m-2 p-2" onClick={login}>Login</button>
                    <button className="border rounded-xl  m-2 p-2" onClick={logout}>Sign Out</button>
                    </div>
                 </div>

                 <div className="px-4 py-4 ">
                     <h3 className="text-2xl text-center">Please sign in to continue</h3>

                     {/* <button onClick={googleLoginHandler} className="flex self-start gap-2 p-4 mx-auto mt-6 font-medium text-white align-middle bg-gray-700 rounded-lg">
                         <FcGoogle className="text-2xl" />Google</button> */}
                </div>
             </div>
         </main>
    );
}

export default SignIn