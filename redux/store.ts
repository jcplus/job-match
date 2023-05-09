import {configureStore} from '@reduxjs/toolkit';
import filtersReducer from './reducers/filters';
import jobsReducer from './reducers/jobs';

const store = configureStore({
	reducer: {
		filters: filtersReducer,
		jobs: jobsReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;