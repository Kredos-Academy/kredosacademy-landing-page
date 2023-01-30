import { useState } from 'react'
import React from 'react'
import './ApplicationForm.css'
import Navbar from './Navbar'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function ApplicationForm() {

    const [firstName, setfirstName] = useState('')
    const [lastName, setlastName] = useState('')
    const [phonenumber, setphonenumber] = useState('')
    const [country, setcountry] = useState('')
    const [employmentstatus, setemploymentstatus] = useState('')
    const [age, setage] = useState('')
    const [guardianFirstName, setguardianFirstName] = useState('')
    const [guardianLastName, setguardianLastName] = useState('')
    const [stateOfResidence, setstateOfResidence] = useState('')
    const [guardianPhonenumber, setguardianPhonenumber] = useState('')
    const [gender, setgender] = useState('')
    const [levelOfEducation, setlevelOfEducation] = useState('')
    const [guardianEmail, setguardianEmail] = useState('')
    const [email, setemail] = useState('')
    const [error, seterror] = useState(false)

    const handleSubmit=(e)=> {
        e.preventDefault();
        if(firstName.length===0||lastName.length===0){
            seterror(true)
        }
        if(firstName&&lastName){
            console.log('first name: ',firstName,'last name: ', lastName)
        }
       
    }


  return (
    <div className='application pb-28'>
        <Navbar />
        <div className='lg:flex inline justify-between'>
            <div className='lg:w-5/12 w-11/12'>
                <h1 className='lg:text-left text-center font-semibold lg:text-4xl text-2xl lg:mt-32 mt-4 lg:ml-20 ml-6 mb-4'>Proceed with your application</h1>
                <h1 className='lg:text-left text-center lg:ml-20 ml-8 lg:text-xl text-base font-medium'>Thank you for your interest in applying to Kredos Academy. To continue your
                    application process, please note that you will be charged <span className='text-3xl font-bold'>$10</span> </h1>
            </div>
            <form className='main-form lg:w-7/12 w-11/12 lg:ml-8 ml-4 lg:mr-8 mr-2 mt-16 rounded-3xl pb-10' onSubmit={handleSubmit}>
                <div className='lg:flex inline justify-between ml-10 mt-20 pb-7'>
                    <div className='mr-10'  >
                            <input className='form-inputs w-80 h-16 mt-8 rounded-xl lg:ml-0 ml-3 pl-2' placeholder='First Name' onChange={e=>setfirstName(e.target.value)}/>
                            {error&&firstName.length<=0?<label>Input your First name</label> : ''}
                            <input className='form-inputs w-80 h-16 mt-8 rounded-xl lg:ml-0 ml-3 pl-2' placeholder='Phone Number(+234...)' onChange={e=>setphonenumber(e.target.value)}/>
                            {error&&phonenumber.length<=0?<label>Input your phone Number</label> : ''}
                            <input className='form-inputs w-80 h-16 mt-8 rounded-xl lg:ml-0 ml-3 pl-2' placeholder='Country of Residence' onChange={e=>setcountry(e.target.value)}/>
                            {error&&country.length<=0?<label>select your country of residence</label> : ''}
                            <input className='form-inputs w-80 h-16 mt-8 rounded-xl lg:ml-0 ml-3 pl-2' placeholder='Employment Status' onChange={e=>setemploymentstatus(e.target.value)}/>
                            {error&&employmentstatus.length<=0?<label>Select your employement status</label> : ''}
                            <input className='form-inputs w-80 h-16 mt-8 rounded-xl lg:ml-0 ml-3 pl-2' placeholder='Age' onChange={e=>setage(e.target.value)}/>
                            {error&&age.length<=0?<label>Enter your age</label> : ''}
                            <input className='form-inputs w-80 h-16 mt-8 rounded-xl lg:ml-0 ml-3 pl-2' placeholder='Guardians first name' onChange={e=>setguardianFirstName(e.target.value)}/>
                            {error&&guardianFirstName.length<=0?<label>Enter your Guardian's first name</label> : ''}
                            <input className='form-inputs w-80 h-16 mt-8 rounded-xl lg:ml-0 ml-3 pl-2' placeholder='Guardians email address' onChange={e=>setguardianEmail(e.target.value)}/>
                            {error&&guardianEmail.length<=0?<label>Enter your Guardian's email address</label> : ''}
                    </div>
                    <div className='mr-10'>
                    <input className='form-inputs w-80 h-16 mt-8 rounded-xl lg:ml-0 ml-3 pl-2' placeholder='Last Name' onChange={e=>setlastName(e.target.value)}/>
                            {error&&lastName.length<=0?<label>Input your last name</label> : ''}
                            <input className='form-inputs w-80 h-16 mt-8 rounded-xl lg:ml-0 ml-3 pl-2' placeholder='Gender' onChange={e=>setgender(e.target.value)}/>
                            {error&&gender.length<=0?<label>Enter your gender</label> : ''}
                            <input className='form-inputs w-80 h-16 mt-8 rounded-xl lg:ml-0 ml-3 pl-2' placeholder='State of residence' onChange={e=>setstateOfResidence(e.target.value)}/>
                            {error&&stateOfResidence.length<=0?<label>Enter your state of residence</label> : ''}
                            <input className='form-inputs w-80 h-16 mt-8 rounded-xl lg:ml-0 ml-3 pl-2' placeholder='Level of education' onChange={e=>setlevelOfEducation(e.target.value)}/>
                            {error&&levelOfEducation.length<=0?<label>Select your level of education</label> : ''}
                            <input className='form-inputs w-80 h-16 mt-8 rounded-xl lg:ml-0 ml-3 pl-2' placeholder='Personal Email address' onChange={e=>setemail(e.target.value)}/>
                            {error&&email.length<=0?<label>Input personal email</label> : ''}
                            <input className='form-inputs w-80 h-16 mt-8 rounded-xl lg:ml-0 ml-3 pl-2' placeholder='Guardians last name' onChange={e=>setguardianLastName(e.target.value)}/>
                            {error&&guardianLastName.length<=0?<label>Enter your Guardian's last name</label> : ''}
                            <input className='form-inputs w-80 h-16 mt-8 rounded-xl lg:ml-0 ml-3 pl-2' placeholder='Guardians Phone Number' onChange={e=>setguardianPhonenumber(e.target.value)}/>
                            {error&&guardianPhonenumber.length<=0?<label>Enter your Guardian's Phone Number</label> : ''}
                    </div>
                </div>
                <button className='payment-button lg:w-10/12 w-6/12 lg:h-16 h-10 rounded-full lg:mb-16 mb-10 lg:ml-16 ml-20 mt-14'>
                    <h1 className='text-white lg:text-2xl text-md font-bold'>Proceed to pay</h1>
                </button>
            </form>
            
        </div>
    </div>
  )
}

export default ApplicationForm