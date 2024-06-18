import React from 'react'
import Image from 'next/image'
import NotebookWithPencil from '../../image/notebook-with-pencil.png'

export default function Page() {
  return (
    <main className='flex flex-col md:flex-row-reverse w-full min-h-screen bg-green500'>
        <div className='max-md:h-[362px] md:w-5/12 flex justify-center items-center text-center text-white bg-green300 font-castoro md:rounded-s-3xl max-md:rounded-b-3xl'>
            <div>
                <Image src={NotebookWithPencil} 
                alt='notebook with pencil'
                className='lg:w-72 w-40'
                />
                <p>
                    a Board
                </p>
            </div>
        </div>
        <div className='md:w-7/12 max-md:flex-1 flex justify-center items-center font-inter text-white'>
            <form>
                <h1 className='mb-4'>
                    Sign in
                </h1>
                <div className='flex flex-col gap-2'>
                    <input type='text' className='bg-white rounded-md p-1' placeholder='Username'/>
                    <button type='submit' className='w-full rounded-md bg-success p-1'>
                        Sign in
                    </button>
                </div>
            </form>
        </div>
    </main>
  )
}
