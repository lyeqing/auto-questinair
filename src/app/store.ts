import { indexSlice } from './../features/index/indexSlice';
import { questionaire } from './../features/questionaire/questionaireSlice';
import {
  Action,
  configureStore,
  ThunkAction,
} from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import kanyeReducer from '../features/kanye/kanyeSlice';
import typeListReducer from '../features/typeList/typeListSlice';
import questionaireReducer from '../features/questionaire/questionaireSlice';
import indexReducer from '../features/index/indexSlice';

export const store = configureStore({
  reducer: {
     counter: counterReducer,
     kanyeQuote: kanyeReducer,
     typeList:typeListReducer,
     questionaire: questionaireReducer,
     index: indexReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
   ReturnType,
   RootState,
   unknown,
   Action<string>
 >;