import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

export interface AuthState {
    msg: string
    token: any
    isLogin: boolean
    error: string
    user: any
    loading: boolean
}

const initialState : AuthState = {
    msg: '',
    token: '',
    isLogin: false,
    error: '',
    user: '',
    loading: false
}

const signInUser = createAsyncThunk('signInUser', async(body)=>{
    const res = await fetch("", {
        method: "post",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(body)
    })
    return await res.json();
})

const loginSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        
    },
    extraReducers: {
        // [signInUser.pending] : (state, action){
        //     state.loading = true;
        // }
    }
});

export default loginSlice.reducer