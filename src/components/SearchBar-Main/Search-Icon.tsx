interface SearchIconProps {
	handleSearchClick: () => void;
}

export default function SearchIcon({ handleSearchClick }: SearchIconProps) {
	return (
		<button
			type="submit"
			onClick={handleSearchClick}
			className="rounded-lg border  bg-gray-800 p-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none"
		>
			<svg
				className="h-5 w-5 text-white"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
				/>
			</svg>
			<span className="sr-only">Search</span>
		</button>
	);
}
