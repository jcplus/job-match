import { User } from '../context/UserContext';

const mockUser: User = {
	id: 2846284,
	username: 'JohnDoe19742',
	display_name: 'John Doe',
	email: 'john.doe@example.com',
};

export const getUserInfo = async (): Promise<User | null> => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(mockUser);
		}, 1000);
	});
};