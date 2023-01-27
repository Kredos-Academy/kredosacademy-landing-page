import { useState } from 'react'
import React from 'react'
import './ApplicationForm.css'
import Navbar from './Navbar'

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
    <div className='application'>
        <Navbar />
        <div className='application-form'>
            <div className='minor-form'>
                <h1 className='application-header'>Proceed with your application</h1>
                <h1 className='application-text'>Thank you for your interest in applying to Kredos Academy. To continue your
                    application process, please note that you will be charged <span className='application-fee'>$10</span> </h1>
            </div>
            <form className='main-form' onSubmit={handleSubmit}>
                <div className='form'>
                    <div className='first-form'  >
                            <input className='form-inputs' type='tel' placeholder='First Name' onChange={e=>setfirstName(e.target.value)}/>
                            {error&&firstName.length<=0?<label>First name cannot be empty</label> : ''}
                            <input className='form-inputs' placeholder='Phone Number(+234...)' onChange={e=>setphonenumber(e.target.value)}/>
                            {error&&phonenumber.length<=0?<label>Input your phone Number</label> : ''}
                            <input className='form-inputs' placeholder='Country of Residence' onChange={e=>setcountry(e.target.value)}/>
                            {error&&country.length<=0?<label>select your country of residence</label> : ''}
                            <input className='form-inputs' placeholder='Employment Status' onChange={e=>setemploymentstatus(e.target.value)}/>
                            {error&&employmentstatus.length<=0?<label>Select your employement status</label> : ''}
                            <input className='form-inputs' placeholder='Age' onChange={e=>setage(e.target.value)}/>
                            {error&&age.length<=0?<label>Enter your age</label> : ''}
                            <input className='form-inputs' placeholder='Guardians first name' onChange={e=>setguardianFirstName(e.target.value)}/>
                            {error&&guardianFirstName.length<=0?<label>Enter your Guardian's first name</label> : ''}
                            <input className='form-inputs' placeholder='Guardians email address' onChange={e=>setguardianEmail(e.target.value)}/>
                            {error&&guardianEmail.length<=0?<label>Enter your Guardian's email address</label> : ''}
                    </div>
                    <div className='second-form'>
                    <input className='form-inputs' placeholder='Last Name' onChange={e=>setlastName(e.target.value)}/>
                            {error&&lastName.length<=0?<label>Last name cannot be empty</label> : ''}
                            <input className='form-inputs' placeholder='Gender' onChange={e=>setgender(e.target.value)}/>
                            {error&&gender.length<=0?<label>Enter your gender</label> : ''}
                            <input className='form-inputs' placeholder='State of residence' onChange={e=>setstateOfResidence(e.target.value)}/>
                            {error&&stateOfResidence.length<=0?<label>Enter your state of residence</label> : ''}
                            <input className='form-inputs' placeholder='Level of education' onChange={e=>setlevelOfEducation(e.target.value)}/>
                            {error&&levelOfEducation.length<=0?<label>Select your level of education</label> : ''}
                            <input className='form-inputs' placeholder='Personal Email address' onChange={e=>setemail(e.target.value)}/>
                            {error&&email.length<=0?<label>Input personal email</label> : ''}
                            <input className='form-inputs' placeholder='Guardians last name' onChange={e=>setguardianLastName(e.target.value)}/>
                            {error&&guardianLastName.length<=0?<label>Enter your Guardian's last name</label> : ''}
                            <input className='form-inputs' placeholder='Guardians Phone Number' onChange={e=>setguardianPhonenumber(e.target.value)}/>
                            {error&&guardianPhonenumber.length<=0?<label>Enter your Guardian's Phone Number</label> : ''}
                    </div>
                </div>
                <button className='payment-button'>
                    <h1 className='button-text'>Proceed to pay</h1>
                </button>
            </form>
            
        </div>
    </div>
  )
}

export default ApplicationForm