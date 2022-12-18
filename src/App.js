import React, { useState } from "react";
import axios from "axios";
import QrReader from "react-qr-reader";
import "./index.css";

export default function App() {
  const [displayScan, setDisplayScan] = useState(false);
  const [result, setResult] = useState(undefined);

  let handleScan = async (data) => {
    if (data !== null && data !== result) {
      try {
        console.log(data);
        console.log(result);
        setResult(data);
        var dataPost = JSON.stringify({
          paymentCode: data,
        });

        var config = {
          method: "post",
          url: "https://b5muol08ii.execute-api.us-east-1.amazonaws.com/check-in",
          headers: {
            accept: "application/json",
            "content-type": "application/json",
          },
          data: dataPost,
        };

        await axios(config);
        setDisplayScan(false);
      } catch (err) {
        handleError(err);
      }
    }
  };

  let enableScan = () => {
    setDisplayScan(true);
  };

  let handleError = (err) => {
    setDisplayScan(false);
    alert(err);
  };
  return (
    <div class="grid h-screen place-items-center">
      {!displayScan ? (
        <button
          onClick={enableScan}
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Escanear
        </button>
      ) : (
        <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: "100%" }}
          facingMode="environment"
        />
      )}
    </div>
  );
}
