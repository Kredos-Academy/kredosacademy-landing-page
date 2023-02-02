import React, { useState } from 'react';
import './auth.css';
import TextInput from './Input';
import { Link } from 'react-router-dom';

export default function Auth() {
	const [bathId, setBatchId] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [showNext, setShowNext] = useState(false);

	return (
		<div className='auth lg:h-940 h-full p-20'>
			<div className='w-full flex-none md:flex md:items-center md:justify-between'>
				<div className='w-full md:w-[40%] flex items-center'>
					<h1 className='md:text-left text-center font-semibold lg:text-6xl text-3xl lg:mt-32 mt-4 lg:ml-16 ml-0 mb-4'>
						Create an account 🤩
					</h1>
				</div>
				<div className='w-full md:w-[60%] flex flex-col my-8'>
					<form>
						<TextInput
							className='w-full lg:h-16 h-14 lg:p-5 p-3 border border-[black] rounded-xl focus:outline-none focus:border-black mt-8'
							name='fName'
							placeholder='Batch no (e.g) - #0001'
							// value={bathId}
							onClick={(e) => setBatchId(e.target.value)}
						/>
						<TextInput
							className='w-full lg:h-16 h-14 lg:p-5 p-3 border border-[black] rounded-xl focus:outline-none focus:border-black mt-8'
							name='fName'
							placeholder='password'
							// value={password}
							onClick={(e) => setPassword(e.target.value)}
						/>

						{showNext === true ? (
							<> 
								<TextInput
									className='w-full lg:h-16 h-14 lg:p-5 p-3 border border-[black] rounded-xl focus:outline-none focus:border-black mt-8'
									name='cPassword'
									placeholder='confirm password'
									// value={confirmPassword}
									onClick={(e) => setConfirmPassword(e.target.value)}
								/>
								<button className='payment-button lg:w-10/12 w-10/12 lg:h-16 h-12 rounded-full lg:mb-16 mb-5 lg:ml-16 md:ml-8 ml-4 mt-14'>
									<h1 className='text-white lg:text-2xl text-md font-bold'>Sign up</h1>
								</button>
							</>
						) : (
							<button
								className='payment-button lg:w-10/12 w-10/12 lg:h-16 h-12 rounded-full lg:mb-16 mb-5 lg:ml-16 md:ml-8 ml-4 mt-14'
								onClick={() => setShowNext(true)}
							>
								<h1 className='text-white lg:text-2xl text-md font-bold'>Confirm password</h1>
							</button>
						)}

						<div className='flex items-center justify-start flex-col lg:ml-64 md:ml-16 my-4 md:flex-row'>
							<span>Already have an account? </span>{' '}
							<Link to='/auth/login' className=' text-green-600 lg:pl-2 pl-0 hover:underline'>
								login
							</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
