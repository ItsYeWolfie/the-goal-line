export const fetchData = async (url: string): Promise<any> => {
	return new Promise((resolve, reject) => {
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				return resolve(data);
			})
			.catch((error) => {
				reject(error);
			});
	});
};

export const fetchDataToArr = async (url: string, arr: any[]) => {
	return new Promise((resolve, reject) => {
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				arr.push(data);
				return resolve(data);
			})
			.catch((error) => {
				reject(error);
			});
	});
};
