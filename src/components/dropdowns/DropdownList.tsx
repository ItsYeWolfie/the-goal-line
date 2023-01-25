import React, { useEffect, useRef, useState } from 'react';
import { BsChevronBarContract, BsChevronBarExpand } from 'react-icons/bs';

interface IDropdownListProps {
	children: React.ReactNode;
	title: string;
	className?: string;
}

export default function DropdownList({ children, title, className }: IDropdownListProps) {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const dropdownRef = useRef(null);

	useEffect(() => {
		function handleClickOutside(event) {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
				setIsDropdownOpen(false);
			}
		}

		// Bind the event listener
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			// Unbind the event listener on clean up
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [dropdownRef]);

	const reactChildrenWithProps = React.Children.map(children, (child) => {
		return React.cloneElement(child, { onClick: () => setIsDropdownOpen(false) });
	});

	return (
		<div
			className={`${className}`}
			ref={dropdownRef}
		>
			<button
				type="button"
				className={`${
					isDropdownOpen ? '' : 'rounded-b-md '
				}flex w-full items-center justify-between rounded-t-md bg-gray-200 px-4 py-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-200`}
				onClick={() => setIsDropdownOpen(!isDropdownOpen)}
			>
				<header>{title}</header>
				{isDropdownOpen ? (
					<BsChevronBarContract className="inline-block" />
				) : (
					<BsChevronBarExpand className="inline-block" />
				)}
			</button>
			{isDropdownOpen && reactChildrenWithProps}
		</div>
	);
}

DropdownList.defaultProps = {
	className: '',
};
