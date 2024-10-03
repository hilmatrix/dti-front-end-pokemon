
import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BooleanState {
    value: boolean;
  }

  const initialState: BooleanState = {
    value: false,
  };

const displaySlice = createSlice({
    name : 'display',
    initialState,
    reducers : {
        setDisplayGrid : (state, action : PayloadAction<boolean>) => {
            state.value = action.payload;
        }
    }
});

export const { setDisplayGrid  } = displaySlice.actions;

const store = configureStore({
    reducer : {
        displayGrid : displaySlice.reducer
    }
});

export type RootState = ReturnType<typeof store.getState>

export default store;
