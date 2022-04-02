import React from 'react'
import Button from '../utils/Button'
import Input from '../utils/Input'

export default function Contact() {
    return (
        <div className='w-[600px] mx-auto'>
            <h1 className="text-[60px] mb-16 text-center font-['Pacifico']" >Get In Touch</h1>

            <p className='text-center font-light'>Have you got a suggestion or a blog post idea? Or maybe you represent a company and would like to work on a partnership? I would love to hear from you!</p>
            <p className='text-center font-light my-10'>
                <strong>info@cuisineblog.com</strong>
                <small className='block'>
                    1123-321-213
                </small>
            </p>
            <form name="contactForm" className="mx-auto m-10">
                <div className="flex flex-col">
                    <label className=""> Name* </label>
                    <Input placeholderTxt='Your Name' id={'firstName'} />
                </div>
                <div className="flex flex-col">
                    <label className=""> Last name </label>
                    <Input placeholderTxt="Your last name" id={'lastName'} />
                </div>
                <div className="flex flex-col">
                    <label className=""> Your email* </label>
                    <Input placeholderTxt="Your email address" id={'email'} />
                </div>
                <div className="flex flex-col">
                    <label className=""> Message* </label>
                    <textarea placeholder="Enter your message" type="text" className="bg-[#F1F1F1]  my-3 outline-none  p-[16px] pr-[56px]" style={{ height: "158px" }}></textarea>
                </div>
                <Button btnText={'Submit'} />
            </form>
        </div>
    )
}
