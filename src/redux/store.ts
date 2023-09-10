import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { banksApi } from "./services/banksApi";

export const store = configureStore({
	reducer: {
		[banksApi.reducerPath]: banksApi.reducer,
	},
	middleware: (getDefaultMiddleWare) =>
		getDefaultMiddleWare().concat(banksApi.middleware),
});

setupListeners(store.dispatch);
