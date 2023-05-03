import {Provider} from 'react-redux';
import store from '../redux/store';

import {OccupationProvider} from '../context/OccupationContext';
import {TechStackProvider} from '../context/TechStackContext';
import {UserProvider} from '../context/UserContext';
import {WorkStyleProvider} from '../context/WorkStyleContext';
import type {AppProps} from 'next/app';

function MyApp({Component, pageProps}: AppProps) {
	return (
		<Provider store={store}>
			<UserProvider>
				<OccupationProvider>
					<TechStackProvider>
						<WorkStyleProvider>
							<Component {...pageProps} />
						</WorkStyleProvider>
					</TechStackProvider>
				</OccupationProvider>
			</UserProvider>
		</Provider>
	);
}

export default MyApp;