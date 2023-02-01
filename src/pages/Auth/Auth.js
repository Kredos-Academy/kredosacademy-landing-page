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
		<div className='auth p-20'>
			<div className='w-full flex-none md:flex md:items-center md:justify-between'>
				<div className='w-full md:w-[40%] flex items-center'>
					<h1 className='md:text-left text-center font-semibold lg:text-4xl text-2xl lg:mt-32 mt-4 lg:ml-20 ml-6 mb-4'>
						proceed to create an account
					</h1>
				</div>
				<div className='w-full md:w-[60%] flex flex-col my-8'>
					<form>
						<TextInput
							className='w-full p-5 border border-[black] rounded-xl focus:outline-none focus:border-black mt-8'
							name='fName'
							placeholder='Batch no (e.g) - #0001'
							// value={bathId}
							onClick={(e) => setBatchId(e.target.value)}
						/>
						<TextInput
							className='w-full p-5 border border-[black] rounded-xl focus:outline-none focus:border-black mt-8'
							name='fName'
							placeholder='password'
							// value={password}
							onClick={(e) => setPassword(e.target.value)}
						/>

						{showNext === true ? (
							<>
								<TextInput
									className='w-full p-5 border border-[black] rounded-xl focus:outline-none focus:border-black mt-8'
									name='cPassword'
									placeholder='confirm password'
									// value={confirmPassword}
									onClick={(e) => setConfirmPassword(e.target.value)}
								/>
								<button className='payment-button lg:w-10/12 w-6/12 lg:h-16 h-10 rounded-full lg:mb-16 mb-10 lg:ml-16 ml-20 mt-14'>
									<h1 className='text-white lg:text-2xl text-md font-bold'>Sign up</h1>
								</button>
							</>
						) : (
							<button
								className='payment-button lg:w-10/12 w-6/12 lg:h-16 h-10 rounded-full lg:mb-16 mb-10 lg:ml-16 ml-20 mt-14'
								onClick={() => setShowNext(true)}
							>
								<h1 className='text-white lg:text-2xl text-md font-bold'>continue</h1>
							</button>
						)}

						<div className='flex items-center justify-start flex-col my-4 md:flex-row'>
							<span>Already have an account? </span>{' '}
							<Link to='/auth/login' className=' text-green-600 pl-2 hover:underline'>
								login
							</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
