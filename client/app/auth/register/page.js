"use client"

// Import statements
import React, { useState } from 'react';
import Image from 'next/image';
import NotebookWithPencil from '../../image/notebook-with-pencil.png';
import { useAuth } from '@/contexts/authcontext';

// Component definition
export default function SignInPage() {
  // State variables
  const [userName, setUserName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  
  // Authentication context hook
  const { register } = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
      register({
        username : userName,
        firstName : firstName,
        lastName : lastName,
        dateOfBirth : dateOfBirth
    }); 
  };

  return (
    <main className='flex flex-col md:flex-row-reverse w-full min-h-screen bg-green500'>
      {/* Left side */}
      <div className='max-md:h-[362px] md:w-5/12 flex justify-center items-center text-center text-white bg-green300 font-castoro md:rounded-s-3xl max-md:rounded-b-3xl'>
        <div>
          <Image
            src={NotebookWithPencil}
            alt='notebook with pencil'
            className='lg:w-72 w-40'
            priority={false}
          />
          <p className='italic font-castoro'>
            a Board
          </p>
        </div>
      </div>

      {/* Right side */}
      <div className='md:w-7/12 max-md:flex-1 flex justify-center items-center font-inter text-white'>
        <div className='w-1/2'>
          <h1 className='mb-4'>
            Register
          </h1>
          <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
            <input
              type='text'
              className='bg-white rounded-md p-1 text-textcolor'
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder='Username or email'
              required
            />
            <input
              type='text'
              className='bg-white rounded-md p-1 text-textcolor'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder='Firstname'
              required
            />
            <input
              type='text'
              className='bg-white rounded-md p-1 text-textcolor'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder='Lastname'
              required
            />
            <input
              type='date'
              className='bg-white rounded-md p-1 text-textcolor'
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              placeholder='Date Of Birth'
              required
            />                                    
            <button
              type='submit'
              className='w-full rounded-md bg-success p-1'
            >
              Register now
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
