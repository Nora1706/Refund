import React from 'react';
import { SignInWithGoogle } from '../firebase'; // Import SignInWithGoogle function
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleSignInWithGoogle = () => {
    SignInWithGoogle(navigate); // Call the SignInWithGoogle function with the navigate function
  };

  return (
    <div>
      <h1>About Us</h1>
      <p>In a world of ever-increasing e-commerce transactions, the need for a seamless and efficient refund process is paramount. Security is paramount in today's digital landscape. REFUNDO employs state-of-the-art encryption and authentication protocols to ensure the safe handling of sensitive financial data during refund transactions. This commitment to security builds trust with both customers and businesses. </p>
      <button onClick={handleSignInWithGoogle}>Sign in with Google</button>
    </div>
  );
};

export default Login;
