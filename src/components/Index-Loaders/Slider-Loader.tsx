/* eslint-disable tailwindcss/no-custom-classname */
export default function SliderLoader() {
	return (
		<div className="flex h-full w-full items-center justify-center gap-[5%] ">
			<div className="blue-circle h-4  w-4 animate-bounce rounded-full bg-blue-400 p-2" />
			<div className="green-circle h-4 w-4 animate-bounce rounded-full bg-blue-600 p-2" />
			<div className="red-circle h-4  w-4 animate-bounce rounded-full bg-blue-800 p-2" />
		</div>
	);
}
