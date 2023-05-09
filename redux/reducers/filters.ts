import {FilterAction, FiltersState} from '../../interfaces/filters';
import {setFilters} from '../actions/filters';

import {
	FETCH_FILTERS_REQUEST,
	FETCH_FILTERS_SUCCESS,
	FETCH_FILTERS_FAILURE,
	TOGGLE_OCCUPATION,
	TOGGLE_TECH_STACK,
	TOGGLE_WORK_STYLE,
	CLEAR_FILTERS,
} from '../actions/types';

const initialState: FiltersState = {
	occupations: [],
	techStacks: [],
	workStyles: [],
	loading: false,
	error: null,
};

const filtersReducer = (state = initialState, action: FilterAction): FiltersState => {
	switch (action.type) {
		case setFilters.type:
			return {
				...state,
				occupations: action.payload.occupations,
				techStacks: action.payload.techStacks,
				workStyles: action.payload.workStyles,
			};
		case FETCH_FILTERS_REQUEST:
			return {
				...state,
				loading: true,
				error: null,
			};

		case FETCH_FILTERS_SUCCESS:
			return {
				...state,
				loading: false,
				occupations: action.payload.occupations,
				techStacks: action.payload.techStacks,
				workStyles: action.payload.workStyles,
			};

		case FETCH_FILTERS_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload,
			};

		case TOGGLE_OCCUPATION:
			return {
				...state,
				occupations: state.occupations.map((occupation, index) =>
					index === action.payload
						? {...occupation, selected: !occupation.selected}
						: occupation
				),
			};

		case TOGGLE_TECH_STACK:
			return {
				...state,
				techStacks: state.techStacks.map((techStack, index) =>
					index === action.payload
						? {...techStack, selected: !techStack.selected}
						: techStack
				),
			};

		case TOGGLE_WORK_STYLE:
			return {
				...state,
				workStyles: state.workStyles.map((workStyle, index) =>
					index === action.payload
						? {...workStyle, selected: !workStyle.selected}
						: workStyle
				),
			};

		case CLEAR_FILTERS:
			return {
				...state,
				occupations: state.occupations.map((occupation) => ({...occupation, selected: false})),
				techStacks: state.techStacks.map((techStack) => ({...techStack, selected: false})),
				workStyles: state.workStyles.map((workStyle) => ({...workStyle, selected: false})),
			};

		default:
			return state;
	}
};

export default filtersReducer;