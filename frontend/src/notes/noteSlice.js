import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    goals: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

export const noteSlice = createSlice({
      name: 'goal',
      initialState,
      reducers: {
          reset: (state) => initialState
      }
})

export const {reset} = noteSlice.actions
export default noteSlice.reducer



