import {
	FETCH_FILTERS_REQUEST,
	FETCH_FILTERS_SUCCESS,
	FETCH_FILTERS_FAILURE,
	TOGGLE_OCCUPATION,
	TOGGLE_TECH_STACK,
	TOGGLE_WORK_STYLE,
	CLEAR_FILTERS
} from '../redux/actions/types';

export type Occupation = {
	label: string;
	selected: boolean;
};

export type TechStack = {
	label: string;
	selected: boolean;
};

export type WorkStyle = {
	label: string;
	selected: boolean;
};

export type SearchFilters = {
	occupations: Occupation[];
	techStacks: TechStack[];
	workStyles: WorkStyle[];
};
export interface FiltersState {
	occupations: Occupation[];
	techStacks: TechStack[];
	workStyles: WorkStyle[];
	loading: boolean;
	error: string | null;
}

export interface FetchFiltersRequest {
	type: typeof FETCH_FILTERS_REQUEST;
}

export interface FetchFiltersSuccess {
	type: typeof FETCH_FILTERS_SUCCESS;
	payload: {
		occupations: Occupation[];
		techStacks: TechStack[];
		workStyles: WorkStyle[];
	};
}

export interface FetchFiltersFailure {
	type: typeof FETCH_FILTERS_FAILURE;
	payload: string;
}

export interface ToggleOccupation {
	type: typeof TOGGLE_OCCUPATION;
	payload: number;
}

export interface ToggleTechStack {
	type: typeof TOGGLE_TECH_STACK;
	payload: number;
}

export interface ToggleWorkStyle {
	type: typeof TOGGLE_WORK_STYLE;
	payload: number;
}

export interface ClearFilters {
	type: typeof CLEAR_FILTERS;
}

export type FilterAction =
	| FetchFiltersRequest
	| FetchFiltersSuccess
	| FetchFiltersFailure
	| ToggleOccupation
	| ToggleTechStack
	| ToggleWorkStyle
	| ClearFilters;