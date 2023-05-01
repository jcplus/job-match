import React, { createContext, useContext, useState, useEffect } from 'react';
import { getUserInfo } from '../api/users';

export interface User {
	id: number;
	username: string;
	display_name: string;
	email: string;
}

interface UserContextData {
	user: User | null;
	setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const UserContext = createContext<UserContextData | undefined>(undefined);

export const UserProvider: React.FC = ({ children }) => {
	const [user, setUser] = useState<User | null>(null);

	useEffect(() => {
		const fetchUserInfo = async () => {
			const userInfo = await getUserInfo();
			setUser(userInfo);
		};
		void fetchUserInfo();
	}, []);

	return (
		<UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
	);
};

export const useUserContext = () => {
	const context = useContext(UserContext);
	if (context === undefined) {
		throw new Error('useUserContext must be used within a UserProvider');
	}
	return context;
};