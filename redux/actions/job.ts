export const SET_JOB = 'SET_JOB';

export const setJob = (job) => {
	return {
		type: SET_JOB,
		payload: job,
	};
};