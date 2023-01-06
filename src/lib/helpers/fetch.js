export const fetchData = async (url) => {
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

export const fetchDataToArr = async (url, arr) => {
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
