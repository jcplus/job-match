import { createAction } from '@reduxjs/toolkit';
import { Job } from '../../interfaces/job';

export const UPDATE_JOB = 'UPDATE_JOB';

export const updateJob = createAction<Job>(UPDATE_JOB);