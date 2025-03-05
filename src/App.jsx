import { useState } from 'react'
import QRCodeScanner from './components/QRCodeScanner'
import Login from './components/Login'
import Header from './components/Header'
import Footer from './components/Footer'
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
          <Header username={username} onLogout={handleLogout}/>
          <QRCodeScanner />
          <Footer />
        </>
      ) : (
        <>
          <Login onLogin={handleLogin} />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App
