import React,  { useContext }  from 'react'
import { Menu, Transition } from '@headlessui/react'
import firebaseConfig from "../config";
import { Fragment } from 'react'
import { AuthContext } from "./User/Auth"

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

const Profile = () => {
 const [isLoggedin, setIsLoggedIn] = React.useState(false);
 firebaseConfig.auth().onAuthStateChanged(function(user) {
     setIsLoggedIn(!!user);
 });
    return (
        <div>
            {isLoggedin ? (<div>
                <Menu as="div" className="ml-3 relative">
                  {({ open }) => (
                    <>
                      <div>
                        <Menu.Button className=" flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-300 dark:focus:ring-offset-gray-700 focus:ring-gray-300 dark:focus:ring-gray-700">
                          <span className="sr-only">Open user menu</span>
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </Menu.Button>
                      </div>
                      <Transition
                        show={open}
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items
                          static
                          className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white dark:bg-gray-700 ring-1 ring-gray-300 dark:ring-gray-700 ring-opacity-5 focus:outline-none"
                        >
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="/profile"
                                className={classNames(
                                  active ? 'bg-gray-100 dark:bg-gray-800' : '',
                                  'block px-4 py-2 text-sm text-gray-500 dark:text-400'
                                )}
                              >
                                Your Profile
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="/setting"
                                className={classNames(
                                  active ? 'bg-gray-100 dark:bg-gray-800' : '',
                                  'block px-4 py-2 text-sm text-gray-500 dark:text-400'
                                )}
                              >
                                Settings
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <button className={classNames(
                                active ? 'bg-gray-100 dark:bg-gray-800 w-full text-left' : '',
                                'block px-4 py-2 text-sm text-left text-gray-500 dark:text-400 w-full')} onClick={() => firebaseConfig.auth().signOut()}>Sign out</button>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </>
                  )}
                </Menu>
            </div>) : (null)}
        </div>
    );
 };
export default Profile;