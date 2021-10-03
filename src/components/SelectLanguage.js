import { useState } from 'react';
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { useTranslation } from 'react-i18next';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function SelectLanguage() {


  const { t, i18n } = useTranslation();
  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };


  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-grey-900">
          Translate
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
              <Menu.Item>
                  <button className= "btn block px-4 py-2 text-sm" onClick={() => changeLanguage('en')}>English</button>
               </Menu.Item>
               <Menu.Item>
                  <button className= "btn block px-4 py-2 text-sm" onClick={() => changeLanguage('hn')}>हिंदी</button>
               </Menu.Item>
               <Menu.Item>
                  <button className= "btn block px-4 py-2 text-sm" onClick={() => changeLanguage('te')}>తెలుగు</button>
               </Menu.Item>
               <Menu.Item>
                  <button className= "btn block px-4 py-2 text-sm" onClick={() => changeLanguage('kn')}>ಕನ್ನಡ</button>
               </Menu.Item>
               <Menu.Item>
                  <button className= "btn block px-4 py-2 text-sm" onClick={() => changeLanguage('ma')}>मराठी</button>
               </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}