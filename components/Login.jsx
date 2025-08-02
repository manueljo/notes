'use client'

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

const login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegister, setIsRegister] = useState(false);
  const [isUserAuthenticating, setIsUserAuthenticating] = useState(false);
  const [error, setError] = useState(null);
  const isEntryValid = email && password && email.includes('@') && password.length >= 8;
  const { signUp, signIn, currentUser } = useAuth();
  const router = useRouter();
  
  const handleUserAuthentication = async () => {
   
    if (!isEntryValid) {
      setError('Please enter a valid email and password.');
      return;
    }

    setIsUserAuthenticating(true);
    try {
      if (isRegister) {
        await signUp(email, password);
      }else {
        await signIn(email, password);
      }
      router.push('/notes');
    }catch (error) {
      setError('Invalid Credentials');
    }finally {
      setIsUserAuthenticating(false);
    }
  }
  return (
    <>
      <div className="login-container">
        <h1>NOTES</h1>
        <p>Prepare and arrange your notes in a simple way.</p>
        <h2>{isRegister ? 'Create an Account' : 'Sign In'}</h2>
        {error && <p className="error">{error}</p>}
        <div className="login-input">
          <p>Email</p>
          <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder="@example.com" />
        </div>
        <div className="login-input">
          <p>Password</p>
          <input value={password} onChange={(e) => {setPassword(e.target.value)}} type="password" placeholder="***********" />
        </div>
        <button className="btn  btn-primary" disabled={!isEntryValid || isUserAuthenticating} onClick={handleUserAuthentication}>{isUserAuthenticating ? 'Loading...' : 'Submit'}</button>
        <button className="btn btn-secondary" onClick={(e)=>{setIsRegister(!isRegister)}}>{isRegister ? 'Sign In' : 'Sign Up'}</button>
        <div className="login-footer">
          <p>
            <a href="">Forgot password?</a>
          </p>
          <p>
            <Link href="https://github.com/manueljo/notes" target="_blank">View code</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default login;
