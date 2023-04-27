import React, { createContext, useContext, useEffect, useState } from 'react';
import { getOccupations } from '../api/occupation';

interface Occupation {
	label: string;
	selected: boolean;
}

interface OccupationContextValue {
	occupations: Occupation[];
	setOccupations: React.Dispatch<React.SetStateAction<Occupation[]>>;
}

const OccupationContext = createContext<OccupationContextValue | null>(null);

export const useOccupationContext = () => {
	const context = useContext(OccupationContext);
	if (!context) {
		throw new Error('useOccupationContext must be used within an OccupationProvider');
	}
	return context;
};

export const OccupationProvider: React.FC = ({ children }) => {
	const [occupations, setOccupations] = useState<Occupation[]>([]);

	useEffect(() => {
		getOccupations().then((data) => setOccupations(data));
	}, []);

	return (
		<OccupationContext.Provider value={{ occupations, setOccupations }}>
			{children}
		</OccupationContext.Provider>
	);
};