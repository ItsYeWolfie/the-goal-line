import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Fragment } from 'react';
import TeamSearch from './TeamSearch';

export default function TeamsPageMobileOverlay({
	mobileFiltersOpen,
	setMobileFiltersOpen,
	handleChange,
	handleSearch,
}: {
	mobileFiltersOpen: boolean;
	setMobileFiltersOpen: (open: boolean) => void;
	handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
	handleSearch: (e: React.FormEvent<HTMLFormElement>) => void;
}) {
	return (
		<Transition.Root
			show={mobileFiltersOpen}
			as={Fragment}
		>
			<Dialog
				as="div"
				className="relative z-40 lg:hidden"
				onClose={setMobileFiltersOpen}
			>
				<Transition.Child
					as={Fragment}
					enter="transition-opacity ease-linear duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="transition-opacity ease-linear duration-300"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-black bg-opacity-25" />
				</Transition.Child>

				<div className="fixed inset-0 z-40 flex">
					<Transition.Child
						as={Fragment}
						enter="transition ease-in-out duration-300 transform"
						enterFrom="translate-x-full"
						enterTo="translate-x-0"
						leave="transition ease-in-out duration-300 transform"
						leaveFrom="translate-x-0"
						leaveTo="translate-x-full"
					>
						<Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl dark:bg-gray-900">
							<div className="flex items-center justify-between px-4">
								<h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">Filters</h2>

								<button
									type="button"
									className="-mr-2 flex h-10 w-10 items-center justify-center p-2 text-gray-400 hover:text-gray-500 dark:text-gray-600 dark:hover:text-gray-500"
									onClick={() => setMobileFiltersOpen(false)}
								>
									<span className="sr-only">Close menu</span>
									<XMarkIcon
										className="h-6 w-6"
										aria-hidden="true"
									/>
								</button>
							</div>

							<TeamSearch
								handleSearch={handleSearch}
								handleChange={handleChange}
							/>
						</Dialog.Panel>
					</Transition.Child>
				</div>
			</Dialog>
		</Transition.Root>
	);
}
