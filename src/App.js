import React, { useState } from "react";
import axios from "axios";
import QrReader from "react-qr-reader";
import "./index.css";

export default function App() {
  const [displayScan, setDisplayScan] = useState(false);
  const [result, setResult] = useState(undefined);
  const [showModal, setShowModal] = useState(false);

  let handleScan = async (data) => {
    console.log(data);
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
        data = null;
        setDisplayScan(false);
        setShowModal(true);
      } catch (err) {
        data = null;
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
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Modal Title</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    I always felt like I could do anything. That’s the main
                    thing people are controlled by! Thoughts- their perception
                    of themselves! They're slowed down by their perception of
                    themselves. If you're taught you can’t do anything, you
                    won’t do anything. I was taught I could do everything.
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
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
