import { FiPhone } from 'react-icons/fi';
import { BsEnvelope } from 'react-icons/bs';
import { AiOutlineGithub } from 'react-icons/ai';
import { useContext, useEffect } from 'react';
import { GlobalHeaderContext, IGlobalHeader } from '../contexts/GlobalHeader.context';

export default function ContactPage() {
	const { setBreadcrumbs } = useContext<IGlobalHeader>(GlobalHeaderContext);
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.stopPropagation();
		}
		const data = new FormData(form);
		const value = Object.fromEntries(data.entries());
		console.log(value);
	};

	useEffect(() => {
		setBreadcrumbs([
			{
				name: 'Contact Us',
				href: '/contact-us',
			},
		]);

		return () => {
			setBreadcrumbs([]);
		};
	}, [setBreadcrumbs]);

	return (
		<div className="mx-auto max-w-7xl py-8 px-4 sm:py-12 sm:px-6 lg:px-8">
			<div className="relative bg-white shadow-xl">
				<h2 className="sr-only">Contact us</h2>

				<div className="grid grid-cols-1 lg:grid-cols-3">
					<div className="relative overflow-hidden bg-indigo-700 py-10 px-6 sm:px-10 xl:p-12">
						<div className="pointer-events-none absolute inset-0 sm:hidden">
							<svg
								className="absolute inset-0 h-full w-full"
								width={343}
								height={388}
								viewBox="0 0 343 388"
								fill="none"
								preserveAspectRatio="xMidYMid slice"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
									fill="url(#linear1)"
									fillOpacity=".1"
								/>
								<defs>
									<linearGradient
										id="linear1"
										x1="254.553"
										y1="107.554"
										x2="961.66"
										y2="814.66"
										gradientUnits="userSpaceOnUse"
									>
										<stop stopColor="#fff" />
										<stop
											offset={1}
											stopColor="#fff"
											stopOpacity={0}
										/>
									</linearGradient>
								</defs>
							</svg>
						</div>
						<div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 sm:block lg:hidden">
							<svg
								className="absolute inset-0 h-full w-full"
								width={359}
								height={339}
								viewBox="0 0 359 339"
								fill="none"
								preserveAspectRatio="xMidYMid slice"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
									fill="url(#linear2)"
									fillOpacity=".1"
								/>
								<defs>
									<linearGradient
										id="linear2"
										x1="192.553"
										y1="28.553"
										x2="899.66"
										y2="735.66"
										gradientUnits="userSpaceOnUse"
									>
										<stop stopColor="#fff" />
										<stop
											offset={1}
											stopColor="#fff"
											stopOpacity={0}
										/>
									</linearGradient>
								</defs>
							</svg>
						</div>
						<div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 lg:block">
							<svg
								className="absolute inset-0 h-full w-full"
								width={160}
								height={678}
								viewBox="0 0 160 678"
								fill="none"
								preserveAspectRatio="xMidYMid slice"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
									fill="url(#linear3)"
									fillOpacity=".1"
								/>
								<defs>
									<linearGradient
										id="linear3"
										x1="192.553"
										y1="325.553"
										x2="899.66"
										y2="1032.66"
										gradientUnits="userSpaceOnUse"
									>
										<stop stopColor="#fff" />
										<stop
											offset={1}
											stopColor="#fff"
											stopOpacity={0}
										/>
									</linearGradient>
								</defs>
							</svg>
						</div>
						<h3 className="text-lg font-medium text-white">Contact information</h3>
						<p className="mt-6 max-w-3xl text-base text-indigo-50">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis vitae eius pariatur magnam
							voluptatibus reiciendis odit sequi consequuntur illo ipsam, perspiciatis, natus beatae ipsum sunt
							quibusdam? Natus soluta optio cumque.
						</p>
						<dl className="mt-8 space-y-6">
							<dt>
								<span className="sr-only">Phone number</span>
							</dt>
							<dd className="flex text-base text-indigo-50">
								<FiPhone className="h-6 w-6 shrink-0 text-indigo-200" />
								<span className="ml-3">+383 (49) 666-293</span>
							</dd>
							<dt>
								<span className="sr-only">Email</span>
							</dt>
							<dd className="flex text-base text-indigo-50">
								<BsEnvelope className="h-6 w-6 shrink-0 text-indigo-200" />
								<span className="ml-3">support@the-goal-line.com</span>
							</dd>
						</dl>
						<ul className="mt-8 flex space-x-12">
							<li>
								<a
									className="text-indigo-200 hover:text-indigo-100"
									href="https://github.com/ItsYeWolfie/the-goal-line/"
								>
									<span className="sr-only">GitHub</span>
									<AiOutlineGithub className="h-6 w-6" />
								</a>
							</li>
						</ul>
					</div>

					<div className="py-10 px-6 dark:bg-gray-900 sm:px-10 lg:col-span-2 xl:p-12">
						<h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Send us a message</h3>
						<form
							onSubmit={handleSubmit}
							className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
						>
							<div>
								<label
									htmlFor="first-name"
									className="block text-sm font-medium text-gray-900 dark:text-gray-200"
								>
									First name
									<input
										type="text"
										name="first-name"
										id="first-name"
										autoComplete="given-name"
										className="mt-1 block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-900 dark:bg-gray-700"
									/>
								</label>
							</div>
							<div>
								<label
									htmlFor="last-name"
									className="block text-sm font-medium text-gray-900 dark:text-gray-200"
								>
									Last name
									<input
										type="text"
										name="last-name"
										id="last-name"
										autoComplete="family-name"
										className="mt-1 block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-900 dark:bg-gray-700"
									/>
								</label>
							</div>
							<div>
								<label
									htmlFor="email"
									className="block text-sm font-medium text-gray-900 dark:text-gray-200"
								>
									Email
									<input
										id="email"
										name="email"
										type="email"
										autoComplete="email"
										className="mt-1 block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-900 dark:bg-gray-700"
									/>
								</label>
							</div>
							<div>
								<div className="flex justify-between">
									<label
										htmlFor="phone"
										className="block text-sm font-medium text-gray-900 dark:text-gray-200"
									>
										Phone
									</label>
									<span
										id="phone-optional"
										className="text-sm text-gray-500"
									>
										Optional
									</span>
								</div>
								<input
									type="text"
									name="phone"
									id="phone"
									autoComplete="tel"
									className="mt-1 block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-900 dark:bg-gray-700"
								/>
							</div>
							<div className="sm:col-span-2">
								<label
									htmlFor="subject"
									className="block text-sm font-medium text-gray-900 dark:text-gray-200"
								>
									Subject
									<input
										type="text"
										name="subject"
										id="subject"
										className="mt-1 block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-900 dark:bg-gray-700"
									/>
								</label>
							</div>
							<div className="sm:col-span-2">
								<div className="flex justify-between">
									<label
										htmlFor="message"
										className="block text-sm font-medium text-gray-900 dark:text-gray-200"
									>
										Message
									</label>
									<span
										id="message-max"
										className="text-sm text-gray-500"
									>
										Max. 500 characters
									</span>
								</div>
								<textarea
									id="message"
									name="message"
									rows={4}
									className="mt-1 block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-900 dark:bg-gray-700"
								/>
							</div>
							<div className="sm:col-span-2 sm:flex sm:justify-end">
								<button
									type="submit"
									className="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:text-gray-200 sm:w-auto"
								>
									Submit
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
