import React from 'react';
import './auth.css';
import TextInput from './Input'; 
import { Link, useHistory } from 'react-router-dom'; 
 
export default function Login() {
	const navigate = useHistory(); 

	return (
		<div className='auth lg:h-940 h-full p-20'>
			<div className='w-full flex-none md:flex md:items-center md:justify-between'>
				<div className='w-full md:w-[40%] items-center'>
					<h1 className='lg:text-left text-center font-semibold lg:text-6xl text-3xl lg:mt-32 mt-4 lg:ml-16 ml-0 lg:mb-4 mb-1'>
						Hey, hello 👋
					</h1>
					<h1 className='text-left lg:ml-16 ml-0 lg:text-3xl text-xl'>Please enter your details</h1>
				</div>
				<div className='w-full md:w-[60%] flex flex-col my-8'>
					<form>
						<TextInput
							className='w-full lg:h-16 h-14 lg:p-5 p-3 border border-[black] rounded-xl focus:outline-none focus:border-black mt-8'
							name='fName'
							placeholder='Batch no (e.g) - #0001'
						/>
						<TextInput
							className='w-full lg:h-16 h-14 lg:p-5 p-3 border border-[black] rounded-xl focus:outline-none focus:border-black mt-8'
							name='fName'
							placeholder='password'
						/>

						<button
							className='payment-button lg:w-10/12 w-10/12 lg:h-16 h-12 rounded-full lg:mb-16 mb-5 lg:ml-16 md:ml-8 ml-4 mt-14'
							onClick={() => navigate.push('/lms')}
						>
							<h1 className='text-white  lg:text-2xl text-md font-bold'>Login</h1>
						</button>

						<div className='flex items-center justify-start flex-col my-4 md:flex-row lg:ml-64 md:ml-16 ml-0'>
							<span>Don't have an account? </span>{' '}
							<Link to='/auth/sign-up' className=' text-green-600 lg:pl-2 pl-0 hover:underline'>
								create one
							</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
