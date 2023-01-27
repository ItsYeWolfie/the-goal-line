export interface IRouteError {
	data: string;
	error: ErrorConstructor;
	columnNumber: number;
	fileName: string;
	lineNumber: number;
	message: string;
	stack: string;
	internal: boolean;
	status: number;
	statusText: string;
}
