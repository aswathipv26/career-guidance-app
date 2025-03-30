import React, { useState } from 'react';
import { auth, db } from '../../firebase/firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { Link, useNavigate } from 'react-router-dom';
import './AuthForm.css';

const AuthForm = ({isRegister}) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try{
            if (isRegister) {
    
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                const user = userCredential.user;
    
                await setDoc(doc(db, "users", user.uid), {
                    firstName,
                    lastName,
                    email,
                    role: "student",
                    createdAt: new Date(),
                });

                navigate("/dashboard");
            } else {
                const userCredential = await signInWithEmailAndPassword(auth, email, password);
                const user = userCredential.user;

                const userRef = doc(db, "users", user.uid);
                const userDoc = await getDoc(userRef);

                if(!userDoc.exists()) {
                    throw new Error("User does not exist in Firestore. Please contact admin")
                }

                navigate("/dashboard");
            }
    
        } catch (err) {
            let errorMessage = "An error occured. Please try again.";
            if (err.code) {
                switch (err.code) {
                    case "auth/email-already-in-use":
                        errorMessage = "This email is already registered.";
                        break;
                    case "auth/invalid-email":
                        errorMessage = "Please enter a valid email.";
                        break;
                     case "auth/wrong-password":
                        errorMessage = "Incorrect Password. Try again.";
                         break;
                    case "auth/user-not-found":
                        errorMessage = "User not found. Please register first";
                        break;
                    default:
                        errorMessage = err.message    
                }
            }
            setError(errorMessage)
    
        }
    }

  return (
    <div className="auth-container ">
        <h2>{isRegister ? "Register" : "Login"}</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
            {isRegister && (
                <>
                <input 
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                />
                <input 
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) =>setLastName(e.target.value)}
                required
                />
                </>
            )}

              <input 
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />
                <input 
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                />
            <button type="submit">{isRegister ? "Sign Up" : "Login"}</button>
        </form>
        <p>
            {isRegister ? "Already have an account?" : "Don't have an account"}
          <Link to={isRegister ? "/login" : "/register"} className="btn-link">
          {isRegister ? "Login Here" : "Register Here"}
          </Link>
        </p>
        
     
    </div>
  )
}

export default AuthForm;
