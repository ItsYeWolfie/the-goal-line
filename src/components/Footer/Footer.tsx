/* eslint-disable jsx-a11y/label-has-associated-control */

import emailjs from 'emailjs-com';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const SERVICE_ID = 'service_ecqoese';
const TEMPLATE_ID = 'template_fclt1ap';
const PUBLIC_KEY = 'R4csS9dWqyi7fuu-y';

export default function Footer() {
	const form = useRef<HTMLFormElement>(null);

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY && form.current) {
			emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
				(result) => {
					console.log(result.text);
					form.current?.reset();
				},
				(error) => {
					console.log(error.text);
				},
			);
		} else {
			console.error('One or more of the required environment variables is missing.');
		}
	};

	return (
		<footer
			aria-label="Site Footer md:mx-[5%] 2xl:container"
			className="bg-gray-900"
		>
			<div className="mx-auto max-w-screen-xl px-4 pt-16 pb-8 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-md">
					<strong className="block text-center text-xl font-medium text-gray-100 sm:text-3xl">
						Want us to email you with the latest news?
					</strong>

					<form
						className="mt-6"
						ref={form}
						onSubmit={handleSubmit}
					>
						<div className="relative max-w-lg">
							<label
								className="sr-only"
								htmlFor="email "
							>
								Email
							</label>

							<input
								className="w-full rounded-full border-gray-200 bg-gray-100 p-4 pr-32 text-sm font-medium text-black"
								id="email"
								type="email"
								placeholder="john@doe.com"
							/>

							<button
								className="absolute top-1/2 right-1 -translate-y-1/2 rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
								type="submit"
							>
								Subscribe
							</button>
						</div>
					</form>
				</div>

				<div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-32">
					<div className="mx-auto max-w-sm lg:max-w-none">
						<p className="mt-4 text-center text-gray-100 lg:text-left lg:text-lg">
							Football live scores page on TheGoalLine.com offers all the latest football results from CHAN 2023 and
							more than 1000+ football leagues and tournaments all around the world including the most famous Premier
							League, LaLiga, Serie A, Bundesliga, UEFA Champions League
						</p>
					</div>

					<div className="grid grid-cols-1 gap-8 text-center lg:grid-cols-3 lg:text-left">
						<div>
							<strong className="font-medium text-gray-900"> Services </strong>

							<nav
								aria-label="Footer Services Nav"
								className="mt-6 flex flex-col space-y-1"
							>
								<a
									className="text-gray-100 transition hover:text-gray-700/75"
									href="/"
								>
									Tailwind
								</a>
								<a
									className="text-gray-100 transition hover:text-gray-700/75"
									href="/"
								>
									React
								</a>
								<a
									className="text-gray-100 transition hover:text-gray-700/75"
									href="/"
								>
									TypeScript
								</a>
								<a
									className="text-gray-100 transition hover:text-gray-700/75"
									href="/"
								>
									Web Development
								</a>
							</nav>
						</div>

						<div>
							<strong className="font-medium text-gray-900"> About </strong>

							<nav
								aria-label="Footer About Nav"
								className="mt-6 flex flex-col space-y-1"
							>
								<a
									className="text-gray-100 transition hover:text-gray-700/75"
									href="/"
								>
									About
								</a>
								<a
									className="text-gray-100 transition hover:text-gray-700/75"
									href="/"
								>
									Careers
								</a>
								<a
									className="text-gray-100 transition hover:text-gray-700/75"
									href="/"
								>
									History
								</a>
								<a
									className="text-gray-100 transition hover:text-gray-700/75"
									href="/"
								>
									Our Team
								</a>
							</nav>
						</div>

						<div>
							<strong className="font-medium text-gray-900"> Support </strong>

							<nav
								aria-label="Footer Support Nav"
								className="mt-6 flex flex-col space-y-1"
							>
								<a
									className="text-gray-100 transition hover:text-gray-700/75"
									href="/"
								>
									FAQs
								</a>

								<a
									className="text-gray-100 transition hover:text-gray-700/75"
									href="/"
								>
									<Link to="/contact-us">Contact</Link>
								</a>

								<a
									className="text-gray-100 transition hover:text-gray-700/75"
									href="/"
								>
									Live Chat
								</a>
							</nav>
						</div>
					</div>
				</div>

				<div className="mt-16 border-t border-gray-100 pt-8">
					<p className="text-center text-xs leading-relaxed text-gray-100">
						© Company 2023. All rights reserved.
						<br />
						Built with{' '}
						<a
							href=" "
							className="text-gray-100 underline transition hover:text-gray-700/75"
						>
							React{' '}
						</a>
						<a
							href=" "
							className="text-gray-100 underline transition hover:text-gray-700/75"
						>
							from JDQH
						</a>
						.
					</p>
				</div>
			</div>
		</footer>
	);
}
