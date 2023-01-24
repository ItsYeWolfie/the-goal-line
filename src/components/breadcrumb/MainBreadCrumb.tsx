import { useContext } from 'react';
import { AiFillHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { HiOutlineChevronRight } from 'react-icons/hi';
import { BreadcrumbContext, IBreadcrumbContext } from '../../contexts/Breadcrumb.context';

export default function MainBreadCrumb() {
	const { breadcrumbs } = useContext<IBreadcrumbContext>(BreadcrumbContext);

	return (
		<nav
			className="flex px-2 py-4"
			aria-label="Breadcrumb"
		>
			<ol className="flex items-center gap-x-4">
				<li>
					<div>
						<Link
							to="/"
							className="text-gray-200 hover:text-gray-100"
						>
							<AiFillHome
								className="h-5 w-5 shrink-0"
								aria-hidden="true"
							/>
							<span className="sr-only">Home</span>
						</Link>
					</div>
				</li>
				{breadcrumbs.map((page) => (
					<li key={page.name}>
						<div className="flex items-center">
							<HiOutlineChevronRight
								className="h-5 w-5 shrink-0 text-gray-200"
								aria-hidden="true"
							/>
							<Link
								to={page.href}
								className="ml-4 text-xs font-medium text-gray-200 hover:text-gray-100 sm:text-sm"
							>
								{page.name}
							</Link>
						</div>
					</li>
				))}
			</ol>
		</nav>
	);
}
