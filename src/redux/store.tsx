
import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BooleanState {
    value: boolean;
  }

  interface StringState {
    value: string;
  }

  const initialBooeanState: BooleanState = {
    value: false,
  };


  const initialStringState: StringState = {
    value: "",
  };

const displayGridSlice = createSlice({
    name : 'displayGrid',
    initialState : initialBooeanState,
    reducers : {
        setDisplayGrid : (state, action : PayloadAction<boolean>) => {
            state.value = action.payload;
        }
    }
});

const searchChangedSlice = createSlice({
    name : 'searchChanged',
    initialState : initialBooeanState,
    reducers : {
        setSearchChanged : (state, action : PayloadAction<boolean>) => {
            state.value = action.payload;
        }
    }
});

const searchItemSlice = createSlice({
    name : 'searchItem',
    initialState : initialStringState,
    reducers : {
        setSearchItem : (state, action : PayloadAction<string>) => {
            state.value = action.payload;
        }
    }
});

const sortChangedSlice = createSlice({
    name : 'sortChanged',
    initialState : initialBooeanState,
    reducers : {
        setSortChanged : (state, action : PayloadAction<boolean>) => {
            state.value = action.payload;
        }
    }
});

const sortTypeSlice = createSlice({
    name : 'sortType',
    initialState : initialStringState,
    reducers : {
        setSortType : (state, action : PayloadAction<string>) => {
            state.value = action.payload;
        }
    }
});


export const { setDisplayGrid  } = displayGridSlice.actions;
export const { setSearchChanged  } = searchChangedSlice.actions;
export const { setSearchItem  } = searchItemSlice.actions;
export const { setSortChanged  } = sortChangedSlice.actions;
export const { setSortType  } = sortTypeSlice.actions;

const store = configureStore({
    reducer : {
        displayGrid : displayGridSlice.reducer,
        searchChanged : searchChangedSlice.reducer,
        searchItem : searchItemSlice.reducer,
        sortChanged : sortChangedSlice.reducer,
        sortType : sortTypeSlice.reducer,
    }
});

export type RootState = ReturnType<typeof store.getState>

export default store;
