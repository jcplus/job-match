import React, { createContext, useContext, useEffect, useState } from 'react';
import { getTechStacks } from '../api/techStacks';

interface TechStack {
	label: string;
	selected: boolean;
}

interface TechStackContextValue {
	techStacks: TechStack[];
	setTechStacks: React.Dispatch<React.SetStateAction<TechStack[]>>;
}

const TechStackContext = createContext<TechStackContextValue | null>(null);

export const useTechStackContext = () => {
	const context = useContext(TechStackContext);
	if (!context) {
		throw new Error('useTechStackContext must be used within a TechStackProvider');
	}
	return context;
};

export const TechStackProvider: React.FC = ({ children }) => {
	const [techStacks, setTechStacks] = useState<TechStack[]>([]);

	useEffect(() => {
		getTechStacks().then((data) => setTechStacks(data));
	}, []);

	return (
		<TechStackContext.Provider value={{ techStacks, setTechStacks }}>
			{children}
		</TechStackContext.Provider>
	);
};