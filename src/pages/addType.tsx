import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { ElementButton } from '../components/elementButton';
import { addType, selectTypeList } from '../features/typeList/typeListSlice';
import Link from 'next/link';
//import styles from '../styles/Home.module.css';

const AddTypePage: NextPage = () => {
  const [type, setType] = useState<string>('');
  const dispatch = useAppDispatch();
  const typeList = useAppSelector(selectTypeList);
  const elementDisplay: JSX.Element[] = typeList.map((e) => (
    <ElementButton key={e} fileName={e} />
  ));
  return (
    <main className="bg-gray-100 dark:bg-gray-800 h-screen ">
      <div className="grid auto-rows-auto grid-cols-2 gap-2 grid-flow-row">
        <div className=" h-screen bg-amber-200">
          <h1 className="w-full text-center font-serif text-3xl mt-4">
            Contents
          </h1>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="email"
              name="floating_email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={type}
              required
              onChange={(e) => setType(e.target.value)}
            />
            <label
              htmlFor="floating_email"
              className="absolute text-md -mt-2 text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Type Name
            </label>
            <button
              onClick={() => dispatch(addType(type))}
              className="text-white mt-3 ml-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>

            <h1 className="title">
              Read{' '}
              <Link href="/">
                <a>this page!</a>
              </Link>
            </h1>
          </div>
        </div>
        <div className=" h-screen bg-orange-400 ">
          <h1 className="w-full text-center font-serif text-3xl mt-4">
            Questionaire
          </h1>
          {elementDisplay}
        </div>
      </div>
    </main>
  );
};

export default AddTypePage;
