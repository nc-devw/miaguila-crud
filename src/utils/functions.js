import { useLocation } from 'react-router-dom';

export const compareFunction = (a, b) => {
	if (a < b) {
		return -1;
	}
	if (a > b) {
		return 1;
	}
	return 0;
};

export const useQuery = () => {
	return new URLSearchParams(useLocation().search);
};
