import { createRef, useState } from 'react';
import React from 'react';
import './ApplicationForm.css';
import Navbar from './Navbar';
import SelectInput from './SelectInput';
import listItems from './util';
import countries from './Countries.json';

function ApplicationForm() {
	const genderRef = createRef();
	const statusRef = createRef();
	const educationRef = createRef();
	const countryRef = createRef();
	const [firstName, setfirstName] = useState('');
	const [lastName, setlastName] = useState('');
	const [phonenumber, setphonenumber] = useState('');
	const [country, setcountry] = useState('');
	const [employmentstatus, setemploymentstatus] = useState('');
	const [age, setage] = useState('');
	// const [guardianFirstName, setguardianFirstName] = useState('');
	// const [guardianLastName, setguardianLastName] = useState('');
	const [stateOfResidence, setstateOfResidence] = useState('');
	// const [guardianPhonenumber, setguardianPhonenumber] = useState('');
	const [gender, setGender] = useState('');
	const [levelOfEducation, setlevelOfEducation] = useState('');
	// const [guardianEmail, setguardianEmail] = useState('');
	const [email, setemail] = useState('');
	const [error, seterror] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (firstName.length === 0 || lastName.length === 0) {
			seterror(true);
		}
		if (firstName && lastName) {
			console.log('first name: ', firstName, 'last name: ', lastName);
		}
	};

	return (
		<div className='application pb-28'>
			<Navbar />
			<div className='lg:flex inline justify-between'>
				<div className='lg:w-5/12 w-11/12'>
					<h1 className='lg:text-left text-center font-semibold lg:text-4xl text-2xl lg:mt-32 mt-4 lg:ml-20 ml-6 mb-4'>
						Proceed with your application
					</h1>
					<h1 className='lg:text-left text-center lg:ml-20 ml-8 lg:text-xl text-base font-medium'>
						Thank you for your interest in applying to Kredos Academy. To continue your application process,
						please note that you will be charged <span className='text-3xl font-bold'>$10</span>{' '}
					</h1>
				</div>
				<form
					className='main-form lg:w-7/12 w-11/12 lg:ml-8 ml-4 lg:mr-8 mr-2 mt-16 rounded-3xl pb-10'
					onSubmit={handleSubmit}
				>
					<div className='lg:flex inline justify-between ml-10 mt-20 pb-7'>
						<div className='mr-10'> 
							<input
								className='form-inputs w-80 h-16 mt-8 rounded-xl lg:ml-0 ml-3 pl-2'
								placeholder='First Name'
								onChange={(e) => setfirstName(e.target.value)}
							/>
							{error && firstName.length <= 0 ? <label>Input your First name</label> : ''}
							<input
								className='form-inputs w-80 h-16 mt-8 rounded-xl lg:ml-0 ml-3 pl-2'
								placeholder='Phone Number(+234...)'
								onChange={(e) => setphonenumber(e.target.value)}
							/>
							{error && phonenumber.length <= 0 ? <label>Input your phone Number</label> : ''}
							
							<SelectInput
								ref={countryRef}
								placeholder={'Country of Residence'}
								item={country}
								setItem={setcountry}
								options={countries}
								withSearch={true}
							/>
							{error && country.length <= 0 ? <label>select your country of residence</label> : ''}
							<SelectInput
								ref={statusRef}
								placeholder={'Employment Status'}
								item={employmentstatus}
								setItem={setemploymentstatus}
								options={listItems.status}
							/>
							{error && employmentstatus.length <= 0 ? <label>Select your employement status</label> : ''}
							<input
								className='form-inputs w-80 h-16 mt-8 rounded-xl lg:ml-0 ml-3 pl-2'
								placeholder='Age'
								onChange={(e) => setage(e.target.value)}
							/>
							{error && age.length <= 0 ? <label>Enter your age</label> : ''}
						</div>
						<div className='mr-10'>
							<input
								className='form-inputs w-80 h-16 mt-8 rounded-xl lg:ml-0 ml-3 pl-2'
								placeholder='Last Name'
								onChange={(e) => setlastName(e.target.value)}
							/>
							{error && lastName.length <= 0 ? <label>Input your last name</label> : ''}
							<SelectInput
								ref={genderRef}
								placeholder={'Gender'}
								item={gender}
								setItem={setGender}
								options={listItems.gender}
							/>

							{/*  <Select styles={{menuList:(basestyles) => ({...basestyles, backgroundColor: 'gray'}),
                        option:(basestyles) => ({...basestyles, backgroundColor: 'gray'})}} className='form-inputs w-80 h-16 mt-8 rounded-xl lg:ml-0 ml-3 pl-2' placeholder='Gender'  options={options} /> */}
							{error && gender.length <= 0 ? <label>Enter your gender</label> : ''}
							<input
								className='form-inputs w-80 h-16 mt-8 rounded-xl lg:ml-0 ml-3 pl-2'
								placeholder='State of residence'
								onChange={(e) => setstateOfResidence(e.target.value)}
							/>
							{error && stateOfResidence.length <= 0 ? <label>Enter your state of residence</label> : ''}
							<SelectInput
								ref={educationRef}
								placeholder={'Level of education'}
								item={levelOfEducation}
								setItem={setlevelOfEducation}
								options={listItems.education}
							/>
							{error && levelOfEducation.length <= 0 ? <label>Select your level of education</label> : ''}
							<input
								className='form-inputs w-80 h-16 mt-8 rounded-xl lg:ml-0 ml-3 pl-2'
								placeholder='Personal Email address'
								onChange={(e) => setemail(e.target.value)}
							/>
							{error && email.length <= 0 ? <label>Input personal email</label> : ''}
						</div>
					</div>
					<button className='payment-button lg:w-10/12 w-6/12 lg:h-16 h-10 rounded-full lg:mb-16 mb-10 lg:ml-16 ml-20 mt-14'>
						<h1 className='text-white lg:text-2xl text-md font-bold'>Proceed to pay</h1>
					</button>
				</form>
			</div>
		</div>
	);
}

export default ApplicationForm;
