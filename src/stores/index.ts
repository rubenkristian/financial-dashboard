import { configureStore } from '@reduxjs/toolkit';
import formReducer from './reducers/formuser';
import imageReducer from './reducers/image';
import pageReducer from './reducers/page';

export const store = configureStore({
    reducer: {
        form: formReducer,
        image: imageReducer,
        page: pageReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;