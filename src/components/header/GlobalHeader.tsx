import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { CgArrowsExpandDownLeft, CgArrowsExpandUpRight } from 'react-icons/cg';
import navigation from '../../lib/navigation-links';

export default function GlobalHeader() {
	const [expanded, setExpanded] = useState(false);

	return (
		<div
			className={`${
				expanded ? 'sm:basis-44' : 'sm:basis-auto'
			} fixed bottom-0 z-10 flex bg-white dark:border-gray-800 dark:bg-gray-900 sm:sticky sm:top-0 sm:h-screen sm:shrink-0 sm:flex-col sm:border-r sm:border-gray-200`}
		>
			{expanded ? (
				<CgArrowsExpandDownLeft
					className="absolute top-0 right-0 m-2 hidden cursor-pointer text-gray-400 dark:text-gray-600 sm:block"
					onClick={() => setExpanded(!expanded)}
				/>
			) : (
				<CgArrowsExpandUpRight
					className="absolute top-0 right-0 m-2 hidden cursor-pointer text-gray-400 dark:text-gray-600 sm:block"
					onClick={() => setExpanded(!expanded)}
				/>
			)}
			<div className="flex flex-1 overflow-y-auto pt-2 sm:flex-col sm:pt-5 sm:pb-4">
				<div className="hidden sm:flex sm:shrink-0 sm:items-center sm:px-4">
					{expanded ? (
						<img
							className="h-8 w-auto"
							src="/logo-no-background.svg"
							alt="Your Company"
						/>
					) : (
						<img
							className="h-8 w-auto"
							src="/logo-no-background-sm.png"
							alt="Your Company"
						/>
					)}
				</div>
				<nav className="flex w-screen justify-around bg-white dark:bg-gray-900 sm:mt-5 sm:block sm:w-auto sm:flex-1 sm:flex-col sm:space-y-1 sm:px-2">
					{navigation.map((item) => (
						<NavLink
							key={item.name}
							to={item.href}
							className={({ isActive }) =>
								`${
									isActive
										? 'bg-gray-100 text-gray-900 hover:bg-gray-100 hover:text-gray-900 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-900 dark:hover:text-gray-100'
										: 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-gray-100'
								} group flex items-center rounded-md p-2 text-sm font-medium text-gray-900`
							}
						>
							<item.icon className={`${expanded ? 'mr-3 w-6 ' : 'w-full '}h-6 shrink-0`} />
							{expanded && <span className="flex-1">{item.name}</span>}
						</NavLink>
					))}
				</nav>
			</div>
			<div className="hidden sm:flex sm:flex-col sm:overflow-y-auto sm:pt-5 sm:pb-4">
				<div className="flex shrink-0 border-t border-gray-200 p-4 dark:border-gray-800">
					<Link
						to="/profile"
						className="group block w-full shrink-0"
					>
						<div className="flex items-center">
							<div className="inline-block h-9 w-9 rounded-full bg-gray-600" />
							{expanded && (
								<div className="ml-3">
									<p className="text-sm font-medium text-gray-700 group-hover:text-gray-900 dark:text-gray-300 dark:group-hover:text-gray-100">
										John Doe
									</p>
									<p className="text-xs font-medium text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-300">
										View profile
									</p>
								</div>
							)}
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
}
