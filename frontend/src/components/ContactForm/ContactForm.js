import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };


  // console.log("FormData:", formData)
  
  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');
    setIsSubmitted(false);

    // Construct the template parameters for emailjs
    const templateParams = {
      from_name: `${formData.firstName} ${formData.lastName} (${formData.email})`,
      to_name: 'Recipient Name',
      message: formData.message,
    };

    

    emailjs.send('service_fh85ex4', 'template_2dv8i07', templateParams, 'PU03skuEjSfl6IPPh')
      .then((result) => {
        console.log(result.text);
        setIsSubmitted(true);
        setFormData({ firstName: '', lastName: '', email: '', message: '' }); // Reset form data
      }, (error) => {
        console.log(error.text);
        setErrorMessage('Something went wrong, please try again.');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="flex flex-row items-center justify-center lg:px-10">
      <div className="lg:w-2/4 bg-white w-full p-10 flex flex-col">
        <h1 className="lg:text-5xl font-bold text-2xl text-left text-[#159D86]">Join us</h1>
        <p className="text-[#159D86] font-medium">Do you want to join our team?</p>

        <form ref={form} onSubmit={sendEmail}>
          <div className="flex flex-col lg:flex-row pt-10 gap-3 items-center lg:w-3/5 justify-between">
            <div className="flex flex-col w-full">
              <label htmlFor="firstName" className="font-regular">First name</label>
              <input
                placeholder="First name"
                className="rounded-lg p-3 border border-gray-300 outline-none"
                id="firstName"
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="lastName" className="font-regular">Last name</label>
              <input
                placeholder="Last name"
                className="rounded-lg p-3 border border-gray-300"
                id="lastName"
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="flex flex-col py-6">
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              className="rounded-lg p-3 border border-gray-300 lg:w-3/5"
              placeholder="Email address"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col py-2">
            <label htmlFor="message">Your message</label>
            <textarea
              id="message"
              className="rounded-lg p-3 border border-gray-300 lg:w-3/5 outline-none"
              placeholder="Enter your questions or message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" disabled={isLoading} className="bg-[#159D86] text-white rounded-lg p-3 mt-4">
            {isLoading ? 'Sending...' : 'Submit'}
          </button>
        </form>

        {errorMessage && <div className="text-red-500 text-center mt-4">{errorMessage}</div>}
        {isSubmitted && <div className="text-green-500 text-center mt-4">Message sent successfully!</div>}
      </div>
      <div className="lg:w-2/4 lg:block hidden">
        <h1 className="lg:text-6xl text-[#159D86] py-2 text-xl font-bold">Explore निरन्तरा...</h1>
        <h1 className="text-[#159D86] lg:text-xl font-medium">EXPLORE WITH US</h1>
      </div>
    </div>
  );
}

export default ContactForm;
