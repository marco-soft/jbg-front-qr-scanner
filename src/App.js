import React, { useState } from "react";
import QrReader from "react-qr-reader";
import "./index.css";

export default function App() {
  const [result, setResult] = useState("No result");
  let handleScan = async (data) => {
    try {
      var raw = JSON.stringify({
        paymentCode: data,
      });

      var requestOptions = {
        method: "POST",
        body: raw,
        redirect: "follow",
      };

      const response = await fetch(
        "https://b5muol08ii.execute-api.us-east-1.amazonaws.com/check-in",
        requestOptions
      );
      console.log(response);
      if (data) {
        setResult(data);
      }
    } catch (err) {
      handleError(err);
    }
  };

  let handleError = (err) => {
    alert(err);
  };
  return (
    <div>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: "100%" }}
        facingMode="environment"
      />
      <h1 className="text-3xl font-bold underline">{result || "hola"}</h1>
    </div>
  );
}
