import { NavLink } from 'react-router-dom';
import navigation from '../../lib/navigation-links';

export default function GlobalHeader() {
	return (
		<div className="fixed -bottom-0.5 z-10 flex h-14 bg-white dark:border-gray-800 dark:bg-gray-900 lg:hidden">
			<nav className="flex w-screen justify-around bg-white dark:bg-gray-900">
				{navigation.map((item) => (
					<NavLink
						key={item.name}
						to={item.href}
						className={({ isActive }) =>
							`${
								isActive
									? 'bg-gray-200 text-gray-900 hover:bg-gray-100 hover:text-gray-900 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-900 dark:hover:text-gray-100'
									: 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-gray-100'
							} flex items-center p-2 text-sm font-medium text-gray-900`
						}
					>
						<item.icon className="h-8 w-8" />
					</NavLink>
				))}
			</nav>
		</div>
	);
}
