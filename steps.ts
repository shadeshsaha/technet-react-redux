/* 
1. npm install @reduxjs/toolkit 
2. npm install react-redux
3. src/redux/store.ts (create folder & store.ts/store.js) 
include in store.ts file (src/redux/store.ts)

import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;

4. src/main.tsx 
include code (Provider and store)
import { Provider } from 'react-redux';
import store from './redux/store.ts';

    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
);

5. redux/hooks.ts (create & include this code in hooks.ts)
import type { TypedUseSelectorHook } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootState } from './store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

6. src/redux/features (create features folder)
7. src/redux/features/cart (create features folder)
7.1. src/redux/features/counter (create features folder)

8. src/redux/features/cart/cartSlice.ts (create slices)


import { IProduct } from "@/types/globalTypes";
import { createSlice } from "@reduxjs/toolkit";

interface IProduct {
  _id: number;
  name: string;
  image: string;
  price: number;
  features: string[];
  status: boolean;
  rating: number;
  quantity?: number;
}


interface ICart {
    products: IProduct[]
}

const initialState: ICart = {
    products: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {}
})

export default cartSlice.reducer;


9. connect slice with store (store.js)
src/redux/store.ts
import cartSlice from './features/cart/cartSlice';

export const store = configureStore({
    reducer: {
        cart: cartSlice
    },
})

10.  using method  ()
import { useAppDispatch } from '@/redux/hooks';
  const dispatch = useAppDispatch();
dispatch(addToCart(product));




*/
