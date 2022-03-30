import {
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';
import { Question, TypeListInsertValue } from '../../components/shared/commonType';

// declaring the types for our state
export type QuestionaireState = {
  value: Question[];
};

const initialState: QuestionaireState = {
  value: [],
};

export const QuestionairSlice = createSlice({
  name: 'Questionaire',
  initialState,

  reducers: {
    addQuetion: (state, action: PayloadAction<string>)  => {

      state.value.push({type:action.payload} as Question);
    },
    removeQuetion: (state, action: PayloadAction<number>) => {
      state.value = state.value.splice(action.payload, 1);
    },

    insertQuetion: (state, action: PayloadAction<TypeListInsertValue>) => {
      state.value.splice(action.payload.index, 0, {type : action.payload.value} as Question);
    },
  },
});

export const {
  addQuetion, 
  removeQuetion, 
  insertQuetion,
} = QuestionairSlice.actions;

export const questionaire = (state: RootState) => state.questionaire.value;

export default QuestionairSlice.reducer;