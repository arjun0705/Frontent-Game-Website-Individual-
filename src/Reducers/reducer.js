import { createSlice } from '@reduxjs/toolkit'
const initialState={
  data:[],
  searching:''
   
}
export const apiSlice = createSlice({
  name: 'APIapp',
  initialState,
  reducers: {
          getdata:(state,action)=>{
            state.data=action.payload
            console.log(state.data)
            
          },

          search:(state,action)=>{
            state.searching=action.payload

          }


  },
})

// Action creators are generated for each case reducer function
export const { getdata,search } = apiSlice.actions

export default apiSlice.reducer