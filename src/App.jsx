import { useState } from 'react'
import QRCodeScanner from './components/QRCodeScanner'
function App() {

  return (
    <div>
    <h1 className="text-2xl font-bold text-center my-4">QR Scanner App</h1>
    <QRCodeScanner />
  </div>
  )
}

export default App
