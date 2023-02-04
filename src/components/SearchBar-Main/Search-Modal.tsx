import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { GiMagnifyingGlass } from 'react-icons/gi';

interface SearchModalProps {
	searchRef: React.RefObject<HTMLInputElement>;
	setSelectedOption: (value: string) => void;
	open: boolean;
	setOpen: (value: boolean) => void;
	handleSearchChange: () => void;
	children: React.ReactNode;
}

export default function SearchModal({
	open,
	setOpen,
	searchRef,
	setSelectedOption,
	handleSearchChange,
	children,
}: SearchModalProps) {
	return (
		<Transition.Root
			show={open}
			as={Fragment}
		>
			<Dialog
				as="div"
				className="relative z-50"
				onClose={setOpen}
			>
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity dark:bg-gray-800 dark:bg-opacity-75" />
				</Transition.Child>

				<div className="fixed inset-0 z-10">
					<div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 translate-y-4  sm:translate-y-0 sm:scale-95"
							enterTo="opacity-100 translate-y-0 sm:scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 translate-y-0 sm:scale-100"
							leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
						>
							<Dialog.Panel className="relative w-full transform overflow-hidden rounded-3xl  bg-gray-100 px-4 pt-5 pb-4 text-left shadow-xl transition-all dark:border dark:border-gray-200 dark:bg-gray-900 sm:my-8 sm:w-full sm:max-w-3xl sm:overflow-auto sm:p-6 sm:pb-4">
								<Dialog.Title
									as="h3"
									className="text-xl font-medium leading-6 text-gray-900 dark:text-white"
								>
									Search
								</Dialog.Title>
								<div className="relative mx-auto mt-4 flex cursor-pointer items-center rounded-md border-[1px]  px-4 py-2 text-sm leading-5">
									<input
										id="search"
										className="block w-full rounded-md border-none bg-transparent py-2 pl-8 text-[19px] leading-5 text-black transition duration-150 ease-in-out placeholder:text-[13px] placeholder:text-gray-600 focus:border-transparent focus:outline-none dark:text-white dark:placeholder:text-gray-400 sm:text-[17px]
								 sm:leading-5 md:placeholder:text-[19px]"
										ref={searchRef}
										onChange={handleSearchChange}
										placeholder="Type to search..."
									/>
									<div className="absolute top-2 right-2 border-none">
										<select
											className="block w-full rounded-md border-[1px] bg-transparent py-2  pl-3 pr-10 text-[13px] leading-5 text-sky-600 focus:border-transparent focus:outline-none dark:text-white  sm:text-[15px] sm:leading-5"
											onChange={(event) => setSelectedOption(event.target.value)}
										>
											{['Teams', 'Players', 'Coaches', 'Venues'].map((option) => (
												<option
													key={option}
													className="bg-sky-900 dark:text-white"
													value={option}
												>
													{option}
												</option>
											))}
										</select>
									</div>
									<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
										<GiMagnifyingGlass
											aria-hidden="true"
											className="h-6 w-6 -rotate-90 text-gray-800  dark:text-gray-200"
										/>
									</div>
								</div>
								<div className="mt-2 h-[30rem] overflow-y-auto scroll-smooth">{children}</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	);
}
