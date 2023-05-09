import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {getUserInfo} from '../../api/user';
import {AppThunk} from '../store';



const initialState: { user: User | null } = {
	user: null,
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<User | null>) => {
			state.user = action.payload;
		},
	},
});

export const {setUser} = userSlice.actions;

export const fetchUser = (): AppThunk => async (dispatch) => {
	try {
		const userData = await getUserInfo();
		dispatch(setUser(userData));
	} catch (error) {
		console.error('Error fetching user data:', error);
	}
};

export default userSlice.reducer;