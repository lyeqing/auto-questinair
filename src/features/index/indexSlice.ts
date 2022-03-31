import {
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

export type IndexState = {
  value: number;
};

const initialState: IndexState = {
  value: 0
};

export const indexSlice = createSlice({
  name: 'indexSlice',
  initialState,
  reducers: {
    changeIndex: (state, action: PayloadAction<number>)  => {
        state.value = action.payload;
    },
  },
});
// Here we are just exporting the actions from this slice, so that we can call them anywhere in our app.
export const {
  changeIndex, 

} = indexSlice.actions;

export const selectIndex = (state: RootState) => state.index.value;

// exporting the reducer here, as we need to add this to the store
export default indexSlice.reducer;