import { Listbox } from '@headlessui/react';
import { ArrowDropDown } from '@mui/icons-material';
import { AnimatePresence, motion } from 'framer-motion';
import { forwardRef, useState } from 'react';
// import Icon from '../Icons';

// eslint-disable-next-line react/display-name
const SelectInput = forwardRef((props, ref) => {
	const { options, placeholder, item, setItem, withSearch = false } = props;

	const [query, setQuery] = useState('');

	return (
		<div ref={ref} className='mt-8'>
			<Listbox value={item} onChange={setItem}>
				<div className='mt-1 relative'>
					<Listbox.Button className='lg:relative w-full form-select-input p-5 border border-[black] rounded-xl focus:outline-none focus:border-black cursor-default py-5 pl-3 pr-10 text-left'>
						{item === '' ? (
							<span className=' capitalize text-[#C2C4CD]'>{placeholder}</span>
						) : (
							<span className='block truncate capitalize'>{item.name}</span>
						)}
						<span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
							{/* <Icon icon='ri-arrow-down-s-line' className='text-[20px]' /> */}
                            <ArrowDropDown  className="text-[20px]" />
						</span>
					</Listbox.Button>
					<AnimatePresence>
						<motion.ul
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.1 }}
							className='absolute z-10 mt-1 w-full bg-white dark:bg-theme-grey-900 shadow-lg max-h-96 rounded-md text-base  sm:text-sm'
							tabIndex={-1}
							role='listbox'
							aria-labelledby='listbox-label'
							aria-activedescendant='listbox-option-3'
						>
							<Listbox.Options className='max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-theme-grey-900 text-base shadow-lg mt-1 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
								{withSearch === true ? (
									<div className='sticky top-0 z-10 bg-white w-full'>
										<li className=' w-full cursor-default select-none relative py-2 px-3'>
											<input
												name='search'
												autoComplete='off'
												className='bg-white block w-full border-1 focus:outline-none'
												placeholder='Search collection'
												onChange={(e) => setQuery(e.target.value)}
											/>
										</li>
										<hr />
									</div>
								) : null}
								{options.filter((items) => items.name.toLowerCase().includes(query.toLowerCase()))
									.length === 0 ? (
									<div className='sticky z-10 text-base font-medium text-center w-full py-4'>
										No Data
									</div>
								) : (
									options
										.filter((items) => items.name.toLowerCase().includes(query.toLowerCase()))
										.map((option) => (
											<Listbox.Option
												key={option.id}
												className='relative hover:bg-[whitesmoke] rounded-[5px] px-6 py-2 mb-1 hover:cursor-pointer'
												value={option}
											>
												<span className='text-base w-full capitalize'>{option.name}</span>
											</Listbox.Option>
										))
								)}
							</Listbox.Options>
						</motion.ul>
					</AnimatePresence>
				</div>
			</Listbox>
		</div>
	);
});

export default SelectInput;
