import {createSlice} from '@reduxjs/toolkit';

const initialState = {
	jobsPage: 1,
};

const jobsSlice = createSlice({
	name: 'jobs',
	initialState,
	reducers: {
		setJobsPage: (state, action) => {
			state.jobsPage = action.payload;
		},
	},
});

export const {setJobsPage} = jobsSlice.actions;
export default jobsSlice.reducer;