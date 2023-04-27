export const getWorkStyles = () => {
	return new Promise<{ label: string; selected: boolean }[]>((resolve) => {
		setTimeout(() => {
			resolve([
				{
					label: 'Work from Home',
					selected: false,
				},
				{
					label: 'Onsite',
					selected: false,
				},
				{
					label: 'Both',
					selected: false,
				},
			]);
		}, 1000);
	});
};
