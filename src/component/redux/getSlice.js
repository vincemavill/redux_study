import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


export const getPosts = createAsyncThunk(
  'get/getData',
  async () => {
    // const { todos } = getState()
    // console.log({ todos })
    // you can dispatch any action from here!
    // dispatch(del(2))
    
    return fetch('https://jsonplaceholder.typicode.com/posts/1/comments'
    ).then((res) => res.json())

  }
)

export const getSlice = createSlice({
  name: 'get',
  initialState: {
    status: 100,
    result:[]
  },
  extraReducers: {
    [getPosts.fulfilled]: (state, { payload }) => {
      state.result = payload
      state.status = 'success'
    },
  }
})

// export const { getPosts } = getSlice.actions


// Action creators are generated for each case reducer function
// export const { getPosts } = getSlice.actions

export default getSlice.reducer