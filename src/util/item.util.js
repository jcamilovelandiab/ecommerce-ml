export const getMostRepeatedCategory = (categories) => {
	let maxNumber = 0;
	let result = '';
	const categoryMap = categories.reduce((map, category) => {
		if(map[category] === undefined) {
			map[category] = 0;
		}
		map[category]+=1;
		if(map[category] > maxNumber) {
			maxNumber = map[category];
			result = category;
		}
		return map
	}, {});
	return result;
}