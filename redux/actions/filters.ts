import {createAction} from '@reduxjs/toolkit';
import {
	FETCH_FILTERS_REQUEST,
	FETCH_FILTERS_SUCCESS,
	FETCH_FILTERS_FAILURE,
	TOGGLE_OCCUPATION,
	TOGGLE_TECH_STACK,
	TOGGLE_WORK_STYLE,
	CLEAR_FILTERS
} from './types';
import {FilterAction, Occupation, TechStack, WorkStyle} from '../../interfaces/filters';

export const setFilters = createAction<{
	occupations: Occupation[];
	techStacks: TechStack[];
	workStyles: WorkStyle[]
}>('filters/setFilters');

export const toggleOccupation = (index: number): FilterAction => {
	return {
		type: TOGGLE_OCCUPATION,
		payload: index,
	};
};
export const toggleTechStack = (index: number): FilterAction => {
	return {
		type: TOGGLE_TECH_STACK,
		payload: index,
	};
};
export const toggleWorkStyle = (index: number): FilterAction => {
	return {
		type: TOGGLE_WORK_STYLE,
		payload: index,
	};
};