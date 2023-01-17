import { html } from 'lit';

import { customElement } from 'lit/decorators.js';
import { LitLightElement } from '../../lib/LitElement';

const pages = [
	{
		title: 'Teams',
		icon: 'fa-solid fa-users',
		description: 'View all of the teams and their related information.',
		href: '/teams',
	},
];

@customElement('error-404')
class PageNotFound extends LitLightElement {
	render() {
		return html`
			<main class="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
				<div class="flex-shrink-0 pt-16"></div>
				<div class="mx-auto max-w-xl py-16 sm:py-24">
					<div class="text-center">
						<p class="text-base font-semibold text-indigo-600">Error 404</p>
						<h1 class="mt-2 text-4xl font-bold tracking-tight text-gray-200 sm:text-5xl">
							This page does not exist.
						</h1>
						<p class="mt-2 text-lg text-gray-300">
							The page you are looking for could not be found.
						</p>
					</div>
					<div class="mt-12">
						<h2 class="text-base font-semibold text-gray-300">Popular pages</h2>
						<ul class="mt-4 divide-y divide-gray-700 border-t border-b border-gray-700" role="list">
							${pages.map(
								(page) => html`
									<li class="relative flex items-start space-x-4 py-6">
										<div class="flex-shrink-0">
											<span
												class="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50"
											>
												<i class="${page.icon} text-indigo-500"></i>
											</span>
										</div>
										<div class="min-w-0 flex-1">
											<h3 class="text-base font-medium text-gray-300">
												<span
													class="rounded-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2"
												>
													<a class="focus:outline-none" href="${page.href}">
														<span class="absolute inset-0" aria-hidden="true"></span>
														${page.title}
													</a>
												</span>
											</h3>
											<p class="text-base text-gray-500">${page.description}</p>
										</div>
										<div class="flex-shrink-0 self-center">
											<svg
												class="h-5 w-5 text-gray-400"
												aria-hidden="true"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
											>
												<path
													fill-rule="evenodd"
													d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
													clip-rule="evenodd"
												/>
											</svg>
										</div>
									</li>
								`
							)}
						</ul>
						<div class="mt-8">
							<a class="text-base font-medium text-indigo-600 hover:text-indigo-500" href="#">
								Or go back home
								<span aria-hidden="true"> &rarr;</span>
							</a>
						</div>
					</div>
				</div>
			</main>
		`;
	}
}
export default PageNotFound;
