import {Provider} from 'react-redux';
import store from '../redux/store';

import {OccupationProvider} from '../context/OccupationContext';
import {TechStackProvider} from '../context/TechStackContext';
import {WorkStyleProvider} from '../context/WorkStyleContext';
import type {AppProps} from 'next/app';

function MyApp({Component, pageProps}: AppProps) {
	return (
		<Provider store={store}>
			<OccupationProvider>
				<TechStackProvider>
					<WorkStyleProvider>
						<Component {...pageProps} />
					</WorkStyleProvider>
				</TechStackProvider>
			</OccupationProvider>
		</Provider>
	);
}

export default MyApp;