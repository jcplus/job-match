import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Job} from '../../interfaces/job';
import {updateJob} from '../actions/jobs';

interface JobsState {
	jobs: Job[];
	jobsPage: number;
}

const initialState: JobsState = {
	jobs: [],
	jobsPage: 1,
};

const jobsSlice = createSlice({
	name: 'jobs',
	initialState,
	reducers: {
		setJobsPage: (state, action: PayloadAction<number>) => {
			state.jobsPage = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(updateJob, (state, action: PayloadAction<Job>) => {
			const index = state.jobs.findIndex((job) => job.id === action.payload.id);
			if (index !== -1) {
				state.jobs[index] = action.payload;
			}
		});
	},
});

export const {setJobsPage} = jobsSlice.actions;
export default jobsSlice.reducer;