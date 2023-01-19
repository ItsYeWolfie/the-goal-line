export const fetchData = async <T>(url: string): Promise<T> => {
	return fetch(url).then((response) => response.json());
};

export default fetchData;
