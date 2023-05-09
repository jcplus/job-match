import {SET_JOB} from '../actions/job';

const initialState = {
	job: null,
};
export const jobReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_JOB:
			return {
				...state,
				job: action.payload,
			};
		default:
			return state;
	}
};