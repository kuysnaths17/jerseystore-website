import React,{useContext} from 'react'
import Image from 'next/image'
import axios from 'axios';
import { NavContext } from './navcontex';

function Register() {
  const {setActiveLink} = useContext(NavContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const email = formData.get('email');


    const allowedDomains = ['gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com'];
    const emailDomain = email.split('@')[1]; // Extract domain from email

    if (!allowedDomains.includes(emailDomain)) {
      alert('Please use a valid email from Gmail, Yahoo, Outlook, or Hotmail.');
      return; // Stop further execution if email is invalid
    }
    const data = {
      first_name: formData.get('firstname'),
      last_name: formData.get('lastname'),
      email: formData.get('email'),
      password: formData.get('password'),
      gender: formData.get('gender')
    };


    console.log('Form Data:', data);

    try {
      const response = await axios.post('https://jerseystore-server.onrender.com/web/createUser', data);
      console.log(response.data);
      if (response.data.isCreated) {
        event.target.reset();
        if(confirm(response.data.message)){
          setActiveLink("Homepage");
        }
      }
    } catch (error) {
      // console.log(error.response.data.message)
      alert(error.response.data.message);
    }
  }
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-10 pb-36 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Create your account</h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>

          <div>
            <label htmlFor='firstname' className="block text-sm/6 font-medium text-gray-900">First Name</label>
            <div className="mt-2">
              <input type="firstname" name="firstname" id="firstname" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
            </div>
          </div>
          <div>
            <label htmlFor='lastname' className="block text-sm/6 font-medium text-gray-900">Last Name</label>
            <div className="mt-2">
              <input type="lastname" name="lastname" id="lastname" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
            </div>
          </div>
          <div>
            <label htmlFor='email' className="block text-sm/6 font-medium text-gray-900">Email address</label>
            <div className="mt-2">
              <input type="email" name="email" id="email" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">Password</label>
              
            </div>
            <div className="mt-2">
              <input type="password" name="password" id="password" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
            </div>
          </div>
          <div>
            <label className="block text-sm/6 font-medium text-gray-900">Gender</label>
            <div className="mt-2 flex items-center">
              <div className="mr-4">
                <input
                  type="radio"
                  name="gender"
                  id="male"
                  value="male"
                  required
                  className="mr-1"
                />
                <label htmlFor="male" className="text-sm/6">Male</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="gender"
                  id="female"
                  value="female"
                  required
                  className="mr-1"
                />
                <label htmlFor="female" className="text-sm/6">Female</label>
              </div>
            </div>
          </div>
          <div className='mt-4'>
            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign up</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register