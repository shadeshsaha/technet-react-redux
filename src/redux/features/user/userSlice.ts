import { auth } from '@/lib/firebase';
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

interface IUserState {
  user: {
    email: string | null;
  };
  isLoading: boolean;
  isError: boolean;
  error: string | null;
}

interface ICredential {
  email: string;
  password: string;
}

const initialState: IUserState = {
  user: {
    email: null,
  },
  isLoading: false,
  isError: false,
  error: null,
};

// Create User using Async-Thunk
// Signup
export const createUser = createAsyncThunk(
  'user/createUser',
  async ({ email, password }: ICredential) => {
    const data = await createUserWithEmailAndPassword(auth, email, password);

    return data.user.email;
  }
);

// Login
export const loginUser = createAsyncThunk(
  'user/loginUser',
  async ({ email, password }: ICredential) => {
    const data = await signInWithEmailAndPassword(auth, email, password);

    return data.user.email;
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // User k set korche
    setUser: (state, action: PayloadAction<string>) => {
      state.user.email = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    // addCase a amra 3-ta jinish add korte parbo. 1. pending, 2. fullfill, 3. rejected
    builder
      .addCase(createUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.user.email = action.payload; // action.payload er moddhe asynchoronous function er result ta ashbe. R obosshoi asynchoronous function k return korte hbe.
        state.isLoading = false;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.user.email = null;
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message!;
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user.email = action.payload;
        state.isLoading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.user.email = null;
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message!;
      });
  },
});

export const { setUser, setLoading } = userSlice.actions;

export default userSlice.reducer;
