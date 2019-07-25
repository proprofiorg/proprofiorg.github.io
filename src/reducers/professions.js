import professionsDB from './professionsDB';
const professions = (state = {professionsDB}, action) => {
	switch(action.type){
		case 'ADD_PROF':
		return [
			...state,
			action.payload
		];
		default:
			return state;
	}
}

export default professions;