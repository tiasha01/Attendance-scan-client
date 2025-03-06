import { useState, useEffect } from 'react';
import { Html5QrcodeScanner, Html5QrcodeScanType} from 'html5-qrcode';
import Footer from './Footer';

function QRCodeScanner() {
  const [dataAvailable, setDataAvailable] = useState(false);
  const [scan, setScan] = useState(false);
  const [qrBoxColor, setQrBoxColor] = useState('bg-gray-400');
  const [studentName, setStudentName] = useState('');
  const [studentClass, setStudentClass] = useState('');
  const [studentSection, setStudentSection] = useState('');
  const [studentRoll, setStudentRoll] = useState('');
  let scanner, readJsonData;

  useEffect(() => {
    if (scan) {
      scanner = new Html5QrcodeScanner('reader',{
        fps: 30,
        qrbox: undefined,
        disableFlip: false,
        supportedScanTypes: [Html5QrcodeScanType.SCAN_TYPE_CAMERA]
      });
      scanner.render(
        (result) => {
          console.log(result); // logging
          try {
            readJsonData = JSON.parse(result);
          } catch (error) {
            console.error("Invalid JSON", error);
          }
          setStudentName(readJsonData.student_name);
          setStudentClass(readJsonData.class);
          setStudentSection(readJsonData.section);
          setStudentRoll(readJsonData.roll_no);
          setQrBoxColor('bg-green-500');
          setDataAvailable(true);
          setTimeout(() => setQrBoxColor(qrBoxColor), 1000);
        },
        (error) => {}
      );
    }
    return () => {
      if (scanner) {
        scanner.clear();
      }
    };
  }, [scan]);


  return (
    <>
      <div className="bg-gray-100 flex-grow">
        <div className="flex flex-col max-w-md mx-auto">
          <div className={`flex flex-col items-center justify-center rounded-md p-2 my-2 shadow-md ${qrBoxColor}`}>
            <div className="w-full max-w-md">
              <div className="p-2 ">
                {scan && <div id="reader" className="w-full mb-4"></div>}
                <div className="mt-4 flex justify-center gap-4">
                  {!scan && (<button className="bg-sky-600 text-white py-2 px-4 rounded hover:bg-sky-500" onClick={() => setScan(true)}>Start Scan</button>)}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col mb-2 bg-slate-300 rounded-md shadow-md">
            {dataAvailable && <table className="table-auto border border-slate-400 w-full text-center">
              <thead>
                <tr className="bg-sky-950 text-white">
                  <th className="border border-slate-300 p-1">Student Field</th>
                  <th className="border border-slate-300 p-1">Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-300 p-1">Name</td>
                  <td className="border border-slate-300 p-1 font-bold">{studentName}</td>
                </tr>
                <tr>
                  <td className="border border-slate-300 p-1">Class</td>
                  <td className="border border-slate-300 p-1 font-bold">{studentClass}</td>
                </tr>
                <tr>
                  <td className="border border-slate-300 p-1">Section</td>
                  <td className="border border-slate-300 p-1 font-bold">{studentSection}</td>
                </tr>
                <tr>
                  <td className="border border-slate-300 p-1">Roll</td>
                  <td className="border border-slate-300 p-1 font-bold">{studentRoll}</td>
                </tr>
              </tbody>
            </table>
            }
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default QRCodeScanner;