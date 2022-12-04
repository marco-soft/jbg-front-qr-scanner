import React, { useState } from "react";
import QrReader from "react-qr-reader";
import Login from "./components/Login";
import "./index.css";

export default function App() {
  const [result, setResult] = useState("No result");
  let handleScan = (data) => {
    if (data) {
      setResult(data);
    }
  };

  let handleError = (err) => {
    // alert(err);
  };
  return (
    <div>
      <Login />
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
