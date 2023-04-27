export const getOccupations = () => {
	return new Promise<{ label: string; selected: boolean }[]>((resolve) => {
		setTimeout(() => {
			resolve([
				{
					label: 'CTO/VPoE/Tech Lead',
					selected: false
				},
				{
					label: 'Project Manager',
					selected: false
				},
				{
					label: 'Project Leader',
					selected: false
				},
				{
					label: 'Web Designer/Director',
					selected: false
				},
				{
					label: 'Infrastructure Engineer/SRE',
					selected: false
				},
				{
					label: 'Frontend Engineer',
					selected: false
				},
				{
					label: 'Backend Engineer',
					selected: false
				},
				{
					label: 'iOS Engineer',
					selected: false
				},
				{
					label: 'Android Engineer',
					selected: false
				},
				{
					label: 'Game Programmer/Game Engine Programmer',
					selected: false
				},
				{
					label: 'QA/Test Engineer',
					selected: false
				}
			]);
		}, 1000);
	});
};