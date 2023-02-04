import { Link, useRouteError } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import errorLinks from '../lib/error-links';

export default function NotFound() {
	const error = useRouteError() as Error;

	return (
		<div className="h-full  w-full bg-gray-900">
			<main className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="w-40 shrink-0 pt-4 md:w-60">
					<img
						className="-ml-2 h-8 w-auto lg:-ml-32"
						src="/logo-no-background.svg"
						alt="Goal Line"
					/>
				</div>
				<div className="mx-auto max-w-xl py-8 sm:py-14">
					<div className="text-center">
						<p className="text-base font-semibold text-sky-600">{error.statusText || error.message}</p>
						<h1 className="mt-2 text-4xl font-bold tracking-tight text-neutral-200 sm:text-5xl">
							Something went wrong.
						</h1>
						<p className="mt-2 text-lg text-neutral-300">
							An error occurred while processing your request. Please try again.
						</p>
					</div>
					<div className="mt-6">
						<h2 className="text-base font-semibold text-neutral-300">Popular pages</h2>
						<ul className="mt-4 divide-y divide-neutral-500 border-y border-neutral-500">
							{errorLinks.map((link) => (
								<li
									className="relative flex items-start space-x-4 py-4"
									key={link.title}
								>
									<div className="shrink-0 hover:text-sky-700">
										<span className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-700">
											<FontAwesomeIcon
												icon={link.icon}
												className="h-6 w-6 text-sky-700"
											/>
										</span>
									</div>
									<div className="min-w-0 flex-1">
										<h3 className="text-base font-medium text-neutral-100">
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
										<p className="text-base text-neutral-400">{link.description}</p>
									</div>
									<div className="shrink-0 self-center">
										<FontAwesomeIcon
											icon={faChevronRight}
											className="text-neutral-200"
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
			</main>
			{/* <footer className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="border-t border-neutral-200 py-12 text-center md:flex md:justify-between">
					<p className="text-base text-neutral-400">&copy; Your Company, Inc. All rights reserved.</p>
					<div className="mt-6 flex justify-center space-x-8 md:mt-0">
						{social.map((item, itemIdx) => (
							<Link
								key={itemIdx}
								to={item.href}
								className="inline-flex text-neutral-400 hover:text-neutral-500">
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
	);
}
