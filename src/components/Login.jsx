import { useState, useEffect } from 'react';
import Footer from './Footer';

function Login(props){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const validUsername = "admin";
    const validPassword = "123";
    function handleLogin() {
        if (username === validUsername && password === validPassword) {
          props.onLogin(username);
        } else {
          alert("Invalid username or password!");
        }
      }
      function handleUsernameChange(event) {
        setUsername(event.target.value);
      }
    
      function handlePasswordChange(event) {
        setPassword(event.target.value);
      }
    return(
      <div className="flex flex-col flex-grow">
        <div className="flex flex-col flex-grow items-center justify-center bg-gray-100">
          <div className="flex font-semibold from-neutral-600 text-4xl mb-20">
            <h5>Attendance Scan</h5>
          </div>
          <div className="w-full max-w-sm p-6 bg-white shadow-lg rounded-lg mb-40">
              <h2 className="text-xl font-bold mb-4 text-center">Login</h2>
              <form onSubmit={handleLogin}>
                <input
                  type="text"
                  placeholder="Username"
                  className="border p-2 w-full mb-2"
                  value={username}
                  onChange={handleUsernameChange}
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="border p-2 w-full mb-2"
                  value={password}
                  onChange={handlePasswordChange}
                />
                <button
                  type="submit"
                  className="bg-sky-600 text-white py-2 px-4 w-full rounded hover:bg-blue-600">
                    Login
                </button>
              </form>
          </div>
        </div>
        <Footer/>
      </div>
    );
};
export default Login;