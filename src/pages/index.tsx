import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { ElementButton } from '../components/elementButton';
//import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const elementList: string[] = [
    '5 star selection',
    'Short text answer',
    'Single choice',
    'Multi choice',
  ];
  const elementDisplay: JSX.Element[] = elementList.map((e) => (
    <ElementButton key={e} fileName={e} />
  ));
  return (
    <main className="bg-gray-100 dark:bg-gray-800 h-screen ">
      <div className="grid auto-rows-auto grid-cols-3 gap-2 grid-flow-row">
        <div className="  h-screen bg-slate-600 ">
          <h1 className="w-full text-center font-serif text-3xl mt-4">
            Components
          </h1>
          {elementDisplay}
        </div>
        <div className=" h-screen bg-orange-400 ">
          <h1 className="w-full text-center font-serif text-3xl mt-4">
            Questionaire
          </h1>
        </div>
        <div className=" h-screen bg-amber-200">
          <h1 className="w-full text-center font-serif text-3xl mt-4">
            Contents
          </h1>
        </div>
      </div>
    </main>
  );
};

export default Home;
