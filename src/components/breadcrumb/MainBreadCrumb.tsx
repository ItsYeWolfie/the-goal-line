import { useContext, useEffect } from 'react';
import { AiFillHome } from 'react-icons/ai';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { HiOutlineChevronRight } from 'react-icons/hi';
import { BreadcrumbContext, IBreadcrumbContext } from '../../contexts/Breadcrumb.context';

export default function MainBreadCrumb({ array }: { array: IBreadcrumbContext['breadcrumbs'] }) {
	const location = useLocation();
	const { breadcrumbs, setBreadcrumbs } = useContext<IBreadcrumbContext>(BreadcrumbContext);
	const currentBreadCrumb = breadcrumbs.find((breadcrumb) => breadcrumb.href === location.pathname);
	useEffect(() => {
		if (currentBreadCrumb) {
			return;
		}

		setBreadcrumbs([...breadcrumbs, ...array]);
	}, []);

	return (
		<nav
			className="flex py-8"
			aria-label="Breadcrumb"
		>
			<ol className="flex items-center space-x-4">
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
								className="ml-4 text-sm font-medium text-gray-200 hover:text-gray-100"
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
