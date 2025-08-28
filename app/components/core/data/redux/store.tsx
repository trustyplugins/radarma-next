// app/components/core/data/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer';

export const store = configureStore({
  reducer: rootReducer,
  // preloadedState: getPreloadedState(),
});

// Persist helpers (optional)
// function onStateChange() {
//   saveToLocalStorage(store.getState());
// }
// store.subscribe(onStateChange);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
