import React from 'react'

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
                    <label className="input__label input__label--light"> Name* </label>
                    <input placeholder="Your name" type="text" className="bg-[#F1F1F1]  my-3 outline-none  p-[16px] pr-[56px]" />
                </div>
                <div className="flex flex-col">
                    <label className="input__label input__label--light"> Last name </label>
                    <input placeholder="Your last name" type="text" className="bg-[#F1F1F1] my-3 outline-none  p-[16px] pr-[56px]" />
                </div>
                <div className="flex flex-col">
                    <label className="input__label input__label--light"> Your email* </label>
                    <input placeholder="Your email address" type="text" className="bg-[#F1F1F1]  my-3 outline-none  p-[16px] pr-[56px]" />
                </div>
                <div className="flex flex-col">
                    <label className="input__label input__label--light"> Message* </label>
                    <textarea placeholder="Enter your message" type="text" className="bg-[#F1F1F1]  my-3 outline-none  p-[16px] pr-[56px]" style={{ height: "158px" }}></textarea>
                </div>
                <button type="submit" name="submit" className="px-8 py-4 bg-black text-white text-center mx-auto block duration-500 hover:bg-[#272927]">Submit</button>
            </form>
        </div>
    )
}
