import React, {useState} from "react";
import { Redirect } from "react-router-dom";
import firebaseConfig from "../config";

const SignUp = () => {
  const [currentUser, setCurrentUser] = useState(null);    
  const handleSubmit = (e) => {
    e.preventDefault();    
    const { email, password } = e.target.elements;
    try {
      firebaseConfig.auth().createUserWithEmailAndPassword(email.value, password.value).then((userCredential)=>{
        userCredential.user.sendEmailVerification();
        firebaseConfig.auth().signOut();
        alert("Email Sent for verification");
      });      
      setCurrentUser(true);
    } catch (error) {
      alert(error);
    }
  };
  if (currentUser) {
      return <Redirect to="/login" />;
  }
  return (
    <div className=" min-h-screen flex flex-row items-center sm:justify-center lg:justify-start py-2 pl-2 pr-1 sm:px-6 lg:px-8" >
      <div className="max-w-md w-full space-y-8">
      <div>
      <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-center">
              <div className="flex-shrink-0 flex items-center">
                <a
                  href="/"
                  className="text-5xl font-thin text-gray-600 dark:text-gray-300 h-8 w-auto "
                  alt="Saaf water">
                  <span class="text-5xl font-black text-indigo-600 dark:text-indigo-400">Saaf </span> water
                  </a>
                  </div>
                  </div>    
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Signup to create your account</h2>
      </div>
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
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
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Email address"
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Password"
            />
          </div>
          <div>
            <label htmlFor="pincode" className="sr-only">
              Enter Area Pincode
            </label>
            <input
              id="pincode"
              name="pincode"
              type="pincode"
              required
              className="rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Area Pincode"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              
            </span>
            Sign Up
           </button>
        </div>
        <div className="text-sm">
              <a href="/Login" className="font-medium text-indigo-600 hover:text-indigo-500">
                Already have an account? Login!
              </a>
            </div>
      </form>
    </div>
      <div className="w-full space-y-8 h-screen ml-8 border-gray-500 rounded-xl hidden lg:block" ><img src= "https://i2.wp.com/sitn.hms.harvard.edu/wp-content/uploads/2019/09/image1.jpg" className="w-screen h-screen rounded-xl" alt="Water"/></div>
      </div>

    
  );
};

export default SignUp;