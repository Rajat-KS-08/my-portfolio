"use client";
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from "yup";

const validationSchema = Yup.object({
    subject : Yup.string().max(25, 'The subject must not contain more than 25 letters').required('Required!'),
    email : Yup.string().required('Required!').email('Please enter a valid email address'),
    message : Yup.string().required('Required')
});

const EmailForm = () => {

  const formik = useFormik({
    initialValues : {
        subject : "",
        email : "",
        message : ""
    },
    onSubmit : async (values) => {
      console.log(values);
    },
    validationSchema,
    handleSubmit : (values) => {
      console.log(values)
    }
  });

  return (
    <React.Fragment>
        <form onSubmit={formik.handleSubmit} className="flex flex-col">
            <div className="mb-6">
                <label htmlFor='email' className="text-white block mb-2 text-sm font-medium">
                    Your Email
                </label>
                <input 
                  type='email'
                  id='email'
                  {...formik.getFieldProps("email")}
                  placeholder='Enter your Email id'
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                />
                {formik.touched.email && formik.errors.email ? 
                  (<div className='flex justify-center items-center h-screen'>
                    <h6 className='text-[#fa541c] text-center text-xl text-bold'>{formik.errors.email}</h6>
                  </div>) : 
                  (null)
                }
            </div>
            <div className="mb-6">
                <label htmlFor='subject' className="text-white block mb-2 text-sm font-medium">
                    Subject
                </label>
                <input 
                  type='text'
                  id='subject'
                  {...formik.getFieldProps("subject")}
                  placeholder='Write the subject of the mail'
                  className='className="bg-[#18191E] border border-[#33353F] placeholder-[#3f6086] text-[#254000]-100 text-sm rounded-lg block w-full p-2.5'
                />
                {formik.touched.subject && formik.errors.subject ? 
                  (<div className='flex justify-center items-center h-screen'>
                    <h6 className='text-[#fa541c] text-center text-xl text-bold'>{formik.errors.subject}</h6>
                  </div>) : 
                  (null)
                }
            </div>
            <div className="mb-6">
                <label htmlFor='message' className="text-white block text-sm mb-2 font-medium">
                    Your message
                </label>
                <textarea 
                  name='message'
                  id='message'
                  {...formik.getFieldProps("message")}
                  placeholder='Write your message here'
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                />
                {formik.touched.message && formik.errors.message ? 
                  (<div className='flex justify-center items-center h-screen'>
                    <h6 className='text-[#fa541c] text-center text-xl text-bold'>{formik.errors.message}</h6>
                  </div>) : 
                  (null)
                }
            </div>
            <button type='submit' className="bg-[#fa541c] hover:bg-[#4096ff] text-white font-medium py-2.5 px-5 rounded-lg w-full">
                Send mail
            </button>
        </form>
    </React.Fragment>
  )
}

export default EmailForm;
