import Link from 'next/link';
import React from 'react';

interface Props {
  token: string;
  imageUrl: string;
  type?: string | null;
  children?: any;
}

const LayoutMain = (props: Props) => {
  return (
    <div className="p-8 content-center justify-items-center grid grid-flow-row grid-cols-1 md:gap-6 divide-y divide-indigo-50">
      <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
        <li className="mr-2">
          <Link href="/">
            <a
              aria-current="page"
              className="inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500"
            >
              Profile
            </a>
          </Link>
        </li>
        <li className="mr-2">
          <a
            href="addType"
            className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
          >
            AddTypeWrong
          </a>
        </li>
        <li className="mr-2">
          <Link href="addType">
            <a className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">
              AddTypeCorrect
            </a>
          </Link>
        </li>
        <li className="mr-2">
          <a className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">
            Contacts
          </a>
        </li>
        <li>
          <a className="inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500">
            Disabled
          </a>
        </li>
      </ul>
      {props.children}
    </div>
  );
};

export { LayoutMain };
