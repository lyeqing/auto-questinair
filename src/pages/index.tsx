import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { ElementButton } from '../components/elementButton';
import { LayoutMain } from '../components/layout/layoutMain';
import { QuestionElement } from '../components/questionElement';
import { QuestionProperty } from '../components/questionProperty';
import { selectIndex } from '../features/index/indexSlice';
import { questionaire } from '../features/questionaire/questionaireSlice';
import { selectTypeList } from '../features/typeList/typeListSlice';
//import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const dispatch = useAppDispatch();
  const typeList = useAppSelector(selectTypeList);
  const Questionaire = useAppSelector(questionaire);
  const elementDisplay: JSX.Element[] = typeList.map((e) => (
    <ElementButton key={e} fileName={e} />
  ));
  const elementDisplay1: JSX.Element[] = Questionaire.map((e, i) => (
    <QuestionElement
      key={e.type}
      question={{
        type: '',
        body: '',
        answer: [],
      }}
      index={i}
    />
  ));

  const index = useAppSelector(selectIndex);
  useEffect(() => {
    document.getElementById('question' + index)?.focus();
  }, [index]);

  // setTimeout(() => {
  //   document.getElementById('question' + index)?.focus();
  // }, 200);
  return (
    <main className="bg-gray-100 dark:bg-gray-800 h-screen ">
      <LayoutMain token={''} imageUrl={''}>
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
            {elementDisplay1}
          </div>
          <div className=" h-screen bg-amber-200">
            <h1 className="w-full text-center font-serif text-3xl mt-4">
              Contents
            </h1>
            <QuestionProperty />
          </div>
        </div>
      </LayoutMain>
    </main>
  );
};

export default Home;
