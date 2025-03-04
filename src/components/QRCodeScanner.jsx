import { useState, useEffect } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';

function QRCodeScanner() {
  const [data, setData] = useState('');
  const [scan, setScan] = useState(false);
  const [bgColor, setBgColor] = useState('');
  let scanner;

  useEffect(() => {
    if (scan) {
      scanner = new Html5QrcodeScanner('reader', { fps: 10, qrbox: 250 });
      scanner.render(
        (result) => {
          setData(result);
          setBgColor('bg-green-500');
          setTimeout(() => setBgColor(''), 500);
        },
        (error) => console.error(error)
      );
    }
    return () => {
      if (scanner) {
        scanner.clear();
      }
    };
  }, [scan]);

  return (
    <div className={`flex flex-col items-center justify-center min-h-screen p-4 ${bgColor}`}>
      <div className="w-full max-w-md shadow-lg">
        <div className="p-6">
          <h2 className="text-xl font-bold mb-4">Attendance Scanner</h2>
          {scan && <div id="reader" className="w-full mb-4"></div>}
          {data && <div className="mt-4 text-center">
            <p>Scanned Result:</p>
            <textarea className="border p-2 w-full" readOnly value={data}></textarea>
          </div>}
          <div className="mt-4 flex justify-center gap-4">
            <button className="bg-blue-500 text-white py-2 px-4 rounded" onClick={() => setScan(!scan)}>{scan ? 'Stop Scan' : 'Start Scan'}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QRCodeScanner;