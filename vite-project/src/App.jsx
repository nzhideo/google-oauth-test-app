// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

function App() {
  return (<GoogleLogin
    onSuccess={credentialResponse => {
      const credentialResponseDecoded = jwtDecode(credentialResponse.credential);
      console.log(credentialResponseDecoded);
    }}
    onError={() => {
      console.log('Login Failed');
    }}
  />
  );
}

// import { useGoogleLogin } from '@react-oauth/google';

// function App() {
//   const login = useGoogleLogin({
//     onSuccess: tokenResponse => console.log(tokenResponse),
//   });

//   return (
//     <button
//       onClick={() => login()}
//       style={{
//         background: "lightblue",
//         color: "red",
//         padding: "10px",
//         fontSize: "20px"
//       }}
//     >
//       Sign in with Google 🚀
//     </button>
//   );
// }

export default App;
