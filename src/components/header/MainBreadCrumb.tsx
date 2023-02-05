import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HiOutlineChevronRight } from 'react-icons/hi';
import { FaInfoCircle } from 'react-icons/fa';
import { GlobalHeaderContext } from '../../contexts/GlobalHeader.context';
import DarkModeToggle from './DarkModeToggle';
import navigation from '../../lib/navigation-links';
import QuickSearch from '../main-search/Search';

export default function MainBreadCrumb() {
	const { breadcrumbs } = useContext(GlobalHeaderContext);

	return (
		<section className="container mx-auto flex items-center justify-between p-2 sm:py-4 lg:p-0">
			<nav className="flex flex-1">
				<ol className="flex items-center gap-x-2 sm:gap-x-4">
					<li>
						<Link to="/">
							<img
								className="h-12 w-12 sm:hidden"
								src="/logo-no-background-sm.png"
								alt="The Goal Line"
							/>
							<img
								className="hidden h-4 w-auto sm:block lg:pl-2"
								src="/logo-no-background.svg"
								alt="The Goal Line"
							/>
							<span className="sr-only">Home</span>
						</Link>
					</li>
					{breadcrumbs.map((page) => (
						<li key={page.href}>
							<div className="flex items-center">
								<HiOutlineChevronRight
									className="h-5 w-5 shrink-0 text-gray-800 dark:text-gray-200"
									aria-hidden="true"
								/>
								<Link
									to={page.href}
									className="ml-2 text-xs font-medium text-gray-800 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-100 sm:ml-4 sm:text-sm"
								>
									{page.name}
								</Link>
							</div>
						</li>
					))}
				</ol>
			</nav>
			<nav className="hidden flex-1 lg:flex">
				{navigation.map(
					(link) =>
						!link.mobileOnly && (
							<NavLink
								to={link.href}
								key={link.name}
								className={({ isActive }) =>
									`${
										isActive
											? `relative bg-gray-200 text-gray-900 before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:rounded-b-md before:rounded-t-md before:bg-sky-700 dark:bg-gray-800 dark:text-gray-100`
											: `text-gray-800 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-100`
									} py-8 px-4 text-sm font-medium ${link.name === 'Home' ? 'lg:hidden' : 'block'}`
								}
							>
								<div className="flex items-center gap-2">
									<link.icon className="h-6 w-6" />
									{link.name}
								</div>
							</NavLink>
						),
				)}
			</nav>
			<div className="flex h-10 items-center justify-end gap-2 text-gray-800 dark:text-gray-200 lg:pr-2">
				<DarkModeToggle />
				<Link
					to="/contact-us"
					className="hidden sm:block"
				>
					<FaInfoCircle className="flex h-6 w-10 items-center justify-center transition-colors duration-300 ease-in-out hover:text-sky-600" />
				</Link>
				<QuickSearch />
			</div>
		</section>
	);
}
