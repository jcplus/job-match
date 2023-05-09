interface User {
	id: number;
	username: string;
	display_name: string;
	email: string;
}

const mockUser: User = {
	id: 2846284,
	username: 'JohnDoe19742',
	display_name: 'John Doe',
	email: 'john.doe@example.com',
};

const cache: {
	[key: string]: {
		loading: boolean;
		data: Promise<User | null>;
	};
} = {};

export const getUserInfo = async (): Promise<User | null> => {
	const cacheKey = 'getUserInfo';
	const cachedRequest = cache[cacheKey];

	if (cachedRequest) {
		return cachedRequest.data;
	} else {
		const request = new Promise<User | null>((resolve) => {
			setTimeout(() => {
				resolve(mockUser);
			}, 1000);
		});

		cache[cacheKey] = {
			loading: true,
			data: request,
		};

		const result = await request;
		cache[cacheKey].loading = false;

		return result;
	}
};