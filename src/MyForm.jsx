import React, { useState } from 'react';

const FormPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    subject: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="ml-0 md:ml-10 w-[20rem] h-[32rem] lg:w-[35rem] rounded">
      <h1 className='capitalize text-center mt-[2.5rem] font-bold text-white'>send us a message</h1>
      <form onSubmit={handleSubmit} className='text-center'>
        <div>
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className='form-design'
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className='form-design'
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className='form-design'
          />
        </div>
        <div>
          <textarea
            placeholder="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className='form-design'
          />
        </div>
        <button type="submit" className='uppercase border-2 p-4 mt-4 rounded-md text-white hover:bg-white hover:text-blue-700'>Send message</button>
      </form>
    </div>
  );
};

export default FormPage;
