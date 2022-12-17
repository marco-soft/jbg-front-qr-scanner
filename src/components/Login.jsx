import React from "react";
import jbg_logo from "../images/JBG_LOGO.png";

export default function Login() {
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div
        className="w-full m-auto bg-white rounded-md shadow-md lg:max-w-xl bg-gradient-to-b
                 from-blue-200"
      >
        <img src={jbg_logo} alt="xxx" />
        <form className="mt-6">
          <div className="mb-2">
            <label
              for="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Usuario
            </label>
            <input
              type="email"
              className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              for="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Contraseña
            </label>
            <input
              type="password"
              className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mt-6">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
              Entrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
