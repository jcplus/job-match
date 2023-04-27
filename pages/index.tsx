import React from 'react';
import Layout from '../components/Layout';
import AdvancedSearch from '../components/AdvancedSearch';

const HomePage: React.FC = () => {
	return (
		<Layout title="Find your perfect job">
			<AdvancedSearch/>
		</Layout>
	);
};

export default HomePage;
