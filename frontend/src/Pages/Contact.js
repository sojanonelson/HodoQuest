import React from 'react'
import ContactForm from '../components/ContactForm/ContactForm'
import Footer from '../components/Footer/Footer'

const Contact = () => {
  return (
    <div className='flex flex-col'>
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default Contact