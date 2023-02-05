import React from 'react'
import Button from '@mui/material/Button';
import './Settings.css'
import userImage from "./Images/IMG_9675.JPG";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

function Settings() {
  return (
    <div className='settings w-1000 ml-40 mt-12 pb-20'>
        <h1 className='font-semibold text-4xl'>Settings</h1> 
        <hr className='w-full mt-7' />
        <div className='flex justify-between mt-10'>
            <div>
            <h1 className='font-semibold text-2xl'>Personal Info</h1>
            <h1 className='font-medium text-base text-gray-500 mt-2'>Update your personal details here</h1>
            </div>
            <div className='flex justify-between'>
            <div className='ml-10'>
                <Button color='success'  size='medium' variant="contained">Cancel</Button>
                </div>
                <div className='ml-10'>
                <Button color='success' size='medium' variant="outlined">save</Button>
                </div>
                
            </div>
        </div>
        <hr className='w-full mt-7' />
        <div className='flex justify-between mt-5'>
            <h1 className='text-lg'>Name</h1>
            <div className='flex mr-40'>
            <input className='personal-detail w-64 h-12 rounded-lg pl-3' placeholder='First name'/>
            <input className='personal-detail w-64 h-12 rounded-lg ml-10 pl-3' placeholder='Last name'/>
            </div>
            
        </div>
        <hr className='w-full mt-7' />
        <div className='flex justify-between mt-5'>
            <h1 className='text-lg'>Email Address</h1>
            <div className='flex mr-40'>
            <input className='personal-detail w-550 h-12 rounded-lg pl-3' placeholder='Email Address'/>
            </div>
            
        </div>
        <hr className='w-full mt-7' />
        <div className='flex justify-between mt-5'>
            <div>
                <h1 className='text-lg'>Your Photo</h1>
                <h1 className='text-base text-gray-500 mt-1'>This would be diplayed on your profile</h1>
            </div>
            <div className='flex mr-40'>
                <img className="w-28 h-28 rounded-full" src={userImage} alt="" />
                <div className='personal-detail w-80 h-32 rounded-lg ml-6 pr-6 pl-6 pt-3 text-center'>
                    <CloudUploadIcon fontSize='large' color='success' />
                    <div>
                    <input  id="file-upload"  hidden   type='file' />
                    <label className='cursor text-blue-800 text-base ml-0 font-semibold' for="file-upload">Click to upload</label><span className='text-base text-gray-500'> or drag and drop SVG, PNG or JPG(max 100 x 100)</span>
                    </div>
                    
                </div>
            </div>
            
        </div>
        <hr className='w-full mt-7' />
        <div className='flex justify-between mt-5'>
            <h1 className='text-lg'>Guardian's Name</h1>
            <div className='flex mr-40'>
            <input className='personal-detail w-64 h-12 rounded-lg pl-3' placeholder='Guardian First name'/>
            <input className='personal-detail w-64 h-12 rounded-lg ml-10 pl-3' placeholder='Guardian Last name'/>
            </div>
            
        </div>
        <hr className='w-full mt-7' />
        <div className='flex justify-between mt-5'>
            <h1 className='text-lg'>Guardian's Email Address</h1>
            <div className='flex mr-40'>
            <input className='personal-detail w-550 h-12 rounded-lg pl-3' placeholder='Guardian Email Address'/>
            </div>
            
        </div>
         <hr className='w-full mt-7' />
        <div className='flex justify-between mt-5'>
            <h1 className='text-lg'>Guardian's Phone number</h1>
            <div className='flex mr-40'>
            <input className='personal-detail w-550 h-12 rounded-lg pl-3' placeholder='Guardian Phone number'/>
            </div>
            
        </div>
    </div>
  )
}

export default Settings