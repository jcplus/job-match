import {OccupationProvider} from '../context/OccupationContext';
import {TechStackProvider} from '../context/TechStackContext';
import {WorkStyleProvider} from '../context/WorkStyleContext';
import type {AppProps} from 'next/app';

function MyApp({Component, pageProps}: AppProps) {
	return (
		<OccupationProvider>
			<TechStackProvider>
				<WorkStyleProvider>
					<Component {...pageProps} />
				</WorkStyleProvider>
			</TechStackProvider>
		</OccupationProvider>
	);
}

export default MyApp;