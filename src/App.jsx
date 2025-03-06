import { useState } from 'react'
import QRCodeScanner from './components/QRCodeScanner'
import Login from './components/Login'
import Header from './components/Header';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");

  function handleLogin(user) {
    setUsername(user);
    setIsAuthenticated(true);
  }
  function handleLogout() {
    setUsername(""); 
    setIsAuthenticated(false); 
  }
  return (
    <div className="flex flex-col min-h-screen">
      {isAuthenticated ? (
        <>
          <Header username={username} onLogout={handleLogout} />
          <QRCodeScanner/>
        </>
      ) : (
          <Login onLogin={handleLogin}/>
      )}
    </div>
  );
}
export default App;
