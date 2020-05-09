import React from 'react';
import "./styles.css"

function Login() {
  return (
    <div className="background px-5 overflow-y-hidden">
      <div className="mx-auto flex justify-center py-10 w-full h-full">
        <div className="w-full max-w-xs">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h1 className="font-sans font-semibold text-center text-lg mb-3">Cacau Time</h1>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                E-mail
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="exemplo@gmail.com" />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Senha
              </label>
              <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
              {true && <p className="text-red-500 text-xs italic">Senha inválida.</p>}
            </div>
            <div>
              <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                Entrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;