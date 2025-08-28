import { storage } from '../../models/interface';
import { SET_USER_CITY } from "./action";
export const saveToLocalStorage = (state: storage) => {
  try {
    const serializedState = JSON.stringify(state);

    localStorage.setItem('state', serializedState);
  } catch (e) {
    //
  }
};
export const getPreloadedState = () => {
  try {
    const serializedState = localStorage.getItem('state');

    if (serializedState === null) return undefined;

    return JSON.parse(serializedState);
  } catch (e) {
    //

    return undefined;
  }
};

// app/components/core/data/redux/storage.tsx (or action.tsx if you keep them there)



export const setUserCity = (city: string) => ({
  type: SET_USER_CITY,
  payload: city,
});

