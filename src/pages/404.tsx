import { Link, useRouteError } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import errorLinks from '../lib/ErrorLinks';
import { IRouteError } from '../types/RouteError.types';
import GlobalHeader from '../components/header/GlobalHeader';
import MainBreadCrumb from '../components/header/MainBreadCrumb';

export default function NotFound() {
	const error = useRouteError() as IRouteError;
	return (
		<main className="flex">
			<GlobalHeader />
			<div className="flex flex-1 flex-col">
				<div className="sticky top-0 z-20 flex flex-col bg-sky-900 p-2 dark:bg-gray-900">
					<MainBreadCrumb />
				</div>
				<main className="overflow-auto">
					<section className="container mx-auto mb-16 shrink-0 grow-0 p-4 px-2 sm:py-8 md:mb-0">
						<div className="h-full w-full bg-gray-100 dark:bg-gray-800">
							<main className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
								<div className="shrink-0 pt-16">
									<img
										className="mx-auto h-12 w-auto"
										src="/logo-no-background.svg"
										alt="Your Company"
									/>
								</div>
								<div className="mx-auto max-w-xl py-16 sm:py-24">
									<div className="text-center">
										<p className="text-base font-semibold text-gray-500">
											{error.statusText ? error.statusText : error.message}
										</p>
										<h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-800 dark:text-gray-200 sm:text-5xl">
											Something went wrong.
										</h1>
										<p className="mt-2 text-lg text-gray-700 dark:text-gray-300">
											An error occurred while processing your request. Please try again.
										</p>
									</div>
									<div className="mt-12">
										<h2 className="text-base font-semibold text-gray-700 dark:text-gray-300">Popular pages</h2>
										<ul className="mt-4 divide-y divide-gray-500 border-y border-gray-500">
											{errorLinks.map((link) => (
												<li
													className="relative flex items-start gap-x-4 py-6"
													key={link.title}
												>
													<div className="shrink-0">
														<span className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-300 dark:bg-gray-700">
															<FontAwesomeIcon
																icon={link.icon}
																className="h-6 w-6 text-gray-600 dark:text-gray-400"
															/>
														</span>
													</div>
													<div className="min-w-0 flex-1">
														<h3 className="text-base font-medium text-gray-100">
															<span className="rounded-sm focus-within:ring-2 focus-within:ring-gray-500 focus-within:ring-offset-2">
																<Link
																	to={link.href}
																	className="focus:outline-none"
																>
																	<span
																		className="absolute inset-0"
																		aria-hidden="true"
																	/>
																	<span className="relative text-gray-800 dark:text-gray-200">{link.title}</span>
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
												className="text-base font-medium text-gray-400 hover:text-gray-500 dark:text-gray-600 dark:hover:text-gray-500"
											>
												Or go back home
												<span aria-hidden="true"> &rarr;</span>
											</Link>
										</div>
									</div>
								</div>
							</main>
							{/* <footer className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="border-t border-gray-200 py-12 text-center md:flex md:justify-between">
					<p className="text-base text-gray-400">&copy; Your Company, Inc. All rights reserved.</p>
					<div className="mt-6 flex justify-center gap-x-8 md:mt-0">
						{social.map((item, itemIdx) => (
							<Link
								key={itemIdx}
								to={item.href}
								className="inline-flex text-gray-400 hover:text-gray-500">
								<span className="sr-only">{item.name}</span>
								<item.icon
									className="h-6 w-6"
									aria-hidden="true"
								/>
							</Link>
						))}
					</div>
				</div>
			</footer> */}
						</div>
					</section>
				</main>
			</div>
		</main>
	);
}
