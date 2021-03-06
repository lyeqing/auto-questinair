import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { TypeListInsertValue } from './shared/commonType';
import {
  addQuetion,
  questionaire,
} from '../features/questionaire/questionaireSlice';
import { changeIndex } from '../features/index/indexSlice';

interface Props {
  fileName: string;
}

const ElementButton = (props: Props) => {
  const dispatch = useAppDispatch();
  const questions = useAppSelector(questionaire);
  return (
    <div className="md:flex md:flex-flow-col md:grid-cols-3 md:grid-rows-3 gap-6 px-6">
      <div className="mb-4">
        <button
          onClick={() => {
            dispatch(changeIndex(questions.length));
            dispatch(addQuetion(props.fileName));
          }}
          type="button"
          className="flex max-w-sm w-full bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-500 hover:from-indigo-600 hover:via-pink-600 hover:to-red-600 focus:outline-none text-white text-2xl uppercase font-bold shadow-md rounded-lg mx-auto p-5"
        >
          <div className="flex sm:flex-cols-12 gap-6">
            <div className="col-span-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
                />
              </svg>
            </div>
            <div className="col-span-2 pt-1.5">{props.fileName}</div>
          </div>
        </button>
      </div>
    </div>
  );
};

export { ElementButton };
