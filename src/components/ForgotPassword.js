import React from 'react'
import firebaseConfig from "../config.js";
import { Redirect } from "react-router-dom";

function ForgotPassword() {
    const forgotSubmit = (e) => {
        e.preventDefault();
        const { email } = e.target.elements;
        try {
          firebaseConfig.auth().sendPasswordResetEmail(email.value);
          } catch (error) {
          alert(error);
        }
      };

    return (
        <div className="min-h-screen flex flex-row items-center justify-center py-2 pl-2 pr-1 sm:px-6 lg:px-8" >
       <div className="max-w-md w-full space-y-8">
           <div>
           <div className="flex-1 flex items-center justify-center">
              <div className="flex-shrink-0 flex items-center">
                <a
                  href="/"
                  className="text-5xl font-thin text-gray-600 dark:text-gray-300 h-8 w-auto "
                  alt="Saaf water">
                  <span class="text-5xl font-black text-indigo-600 dark:text-indigo-400">Saaf </span> water
                  </a>
            </div>  
        </div>
        <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">Don't worry, we will mail you a password reset link</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={forgotSubmit}>
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="rounded-md shadow-sm -space-y-px">
        <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mb-8"
                placeholder="Email address"
              />
            </div>
            <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 mb-8 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Send email
             </button>
          </div>
          <div className="justify-center flex font-medium text-indigo-600 hover:text-indigo-500">
          <a href="/login">Go back to Login</a>
          </div>
        </div>
        </form>
        </div>
        </div>
    );
};

export default ForgotPassword;
