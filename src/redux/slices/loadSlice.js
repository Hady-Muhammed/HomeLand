import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoading: false,
}

const loadSlice = createSlice({
  name: 'load',
  initialState,
  reducers: {
    SET_ISLOADING(state , {type , payload}) {
        state.isLoading = payload;
    }
  }
});

export const {SET_ISLOADING} = loadSlice.actions

export default loadSlice.reducer