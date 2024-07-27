// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import { GoogleLogin } from '@react-oauth/google';
// import { jwtDecode } from "jwt-decode";

// function App() {
//   return (<GoogleLogin
//     onSuccess={credentialResponse => {
//       const credentialResponseDecoded = jwtDecode(credentialResponse.credential);
//       console.log(credentialResponseDecoded);
//     }}
//     onError={() => {
//       console.log('Login Failed');
//     }}
//   />
//   );
// }

import React, { useState } from 'react';
import { useGoogleLogin } from '@react-oauth/google';

function App() {
  const [userInfo, setUserInfo] = useState(null);

  const login = useGoogleLogin({
    onSuccess: async tokenResponse => {
      console.log(tokenResponse);

      const userResponse = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
        headers: {
          'Authorization': `Bearer ${tokenResponse.access_token}`
        }
      });
      const userData = await userResponse.json();
      setUserInfo(userData);
    },
    onError: error => console.log(error)
  });

  return (
    <div>
      <button
        onClick={() => login()}
        style={{
          background: "lightblue",
          color: "red",
          padding: "10px",
          fontSize: "20px"
        }}
      >
        Sign in with Google 🚀
      </button>

      {userInfo && (
        <div>
          <h2>Welcome, {userInfo.name}</h2>
          <p>Email: {userInfo.email}</p>
        </div>
      )}
    </div>
  );
}

export default App;