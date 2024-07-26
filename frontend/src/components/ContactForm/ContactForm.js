import React from 'react'

const ContactForm = () => {
  return (
    <div className='flex flex-row items-center justify-center lg:px-10'>
      <div className='w-2/4 bg-white   p-10 flex flex-col'>
      <h1 className='text-5xl poppins-bold text-left text-[#159D86]'>Join us</h1>
      <p className='text-[#159D86] poppins-medium'>Do you want to join our team?</p>

      <div className=' name flex flex-row pt-10 gap-3  items-center w-3/5 justify-between'>
        <div className='flex flex-col w-full'>
        <label htmlFor='firstname' className='poppins-regular'>First name</label>
        <input placeholder='first name ' className='rounded-lg p-3 border border-gray-300 outline-none ' id='firstname' type='text'/>
        </div>

        <div className='flex flex-col w-full'>
        <label htmlFor='lastname' className='poppins-regular'>Last name</label>
        <input placeholder='last name ' className='rounded-lg p-3 border border-gray-300 ' id='lastname' type='text'/>
        </div>

      </div>

      <div className=' email flex flex-col py-6  '>
        
        <label htmlFor='email'>Email address</label>
        <input id='email' className='rounded-lg p-3 border border-gray-300 w-3/5 ' placeholder='Email address'/>
        


      </div>
      <div className=' message flex   flex-col py-2'>
        
        <label htmlFor='message'>Your message</label>
        <textarea id='message' className='rounded-lg p-3 border border-gray-300 w-3/5  outline-none ' placeholder='Enter your questions or message' />
        


      </div>

      <div className='bg-[#159D86] text-center w-3/5 rounded-lg p-2 mt-5'>
        <p className='text-regular text-white '>Submit</p>

      </div>

      </div>
      <div className='w-2/4'>

      <h1 className="lg:text-6xl text-[#159D86] py-2 text-xl poppins-bold font-bold">Explore निरन्तरा...</h1>
        <h1 className='text-[#159D86] lg:text-xl poppins-medium'>EXPLORE WITH US</h1>

      </div>
      
      
    </div>
  )
}

export default ContactForm