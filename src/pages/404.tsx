import { Link, useRouteError } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import errorLinks from '../lib/error-links';
import GlobalHeader from '../components/header/Global';
import MainBreadCrumb from '../components/header/MainBreadCrumb';
import Footer from '../components/footer/Footer';
import { IError } from '../types/General.types';

export default function NotFound() {
	const error = useRouteError() as IError;

	return (
		<div className="flex flex-1 flex-col">
			<GlobalHeader />
			<div className="sticky top-0 z-50 flex flex-col border-b border-b-gray-500 bg-gray-100 p-2 shadow-lg dark:bg-gray-900 md:p-0">
				<MainBreadCrumb />
			</div>
			<section className="container mx-auto mb-16 shrink-0 grow-0 p-4 px-2 sm:py-8 md:mb-0">
				<div className="mx-auto max-w-xl py-8 sm:py-14">
					<div className="text-center">
						<p className="text-base font-semibold text-sky-600">
							{error.status || error.error.message || error.message}
						</p>
						<h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-800 dark:text-gray-200 sm:text-5xl">
							Something went wrong.
						</h1>
						<p className="mt-2 text-lg text-gray-700 dark:text-gray-300">
							An error occurred while processing your request. Please try again.
						</p>
					</div>
					<div className="mt-6">
						<h2 className="text-base font-semibold text-gray-700 dark:text-gray-300">Popular pages</h2>
						<ul className="mt-4 divide-y divide-neutral-500 border-y border-neutral-500">
							{errorLinks.map((link) => (
								<li
									className="relative flex items-start space-x-4 py-4"
									key={link.title}
								>
									<div className="shrink-0 hover:text-sky-700">
										<span className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-300 dark:bg-gray-700">
											<FontAwesomeIcon
												icon={link.icon}
												className="h-6 w-6 text-sky-700"
											/>
										</span>
									</div>
									<div className="min-w-0 flex-1">
										<h3 className="text-base font-medium text-gray-900 dark:text-gray-100">
											<span className="rounded-sm focus-within:ring-2 focus-within:ring-sky-500 focus-within:ring-offset-2">
												<Link
													to={link.href}
													className="focus:outline-none"
												>
													<span
														className="absolute inset-0"
														aria-hidden="true"
													/>
													{link.title}
												</Link>
											</span>
										</h3>
										<p className="text-base text-gray-600 dark:text-gray-400">{link.description}</p>
									</div>
									<div className="shrink-0 self-center">
										<FontAwesomeIcon
											icon={faChevronRight}
											className="text-gray-800 dark:text-gray-200"
										/>
									</div>
								</li>
							))}
						</ul>
						<div className="mt-8">
							<Link
								to="/"
								className="text-base font-medium text-sky-600 hover:text-sky-500"
							>
								Or go back home
								<span aria-hidden="true"> &rarr;</span>
							</Link>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
}
