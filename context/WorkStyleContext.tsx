import React, {createContext, useContext, useEffect, useState} from 'react';
import {getWorkStyles} from '../api/workStyles';

interface WorkStyle {
	label: string;
	selected: boolean;
}
interface WorkStyleContextValue {
	workStyles: WorkStyle[];
	setWorkStyles: React.Dispatch<React.SetStateAction<WorkStyle[]>>;
}

const WorkStyleContext = createContext<WorkStyleContextValue | null>(null);

export const useWorkStyleContext = () => {
	const context = useContext(WorkStyleContext);
	if (!context) {
		throw new Error('useWorkStyleContext must be used within a WorkStyleProvider');
	}
	return context;
};

export const WorkStyleProvider: React.FC = ({children}) => {
	const [workStyles, setWorkStyles] = useState<WorkStyle[]>([]);

	useEffect(() => {
		getWorkStyles().then((data) => setWorkStyles(data));
	}, []);

	return (
		<WorkStyleContext.Provider value={{workStyles, setWorkStyles}}>
			{children}
		</WorkStyleContext.Provider>
	);
};