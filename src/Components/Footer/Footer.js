import React from 'react'
import Button from '../utils/Button'
import Input from '../utils/Input'
export default function Footer() {
    return (
        <div className='bg-[#E8E3E1] p-20 text-center '>
            <div className='w-[600px] mx-auto'>
                <h3 className='text-2xl m-10'>Subscribe to our newsletter</h3>
                <div className='flex flex-col'>
                    <label htmlFor="footerEmail" className='text-left'>Email address*</label>
                    <Input id='footerEmail' name='email' className='mb-6 mt-1' placeholderTxt='Your Email' />
                </div>
                <Button btnText={'Subscribe'} />
                <ul className='flex items-center justify-center text-xl m-10'>
                    <li><i className="bi mx-3 bi-instagram"></i></li>
                    <li><i className="bi mx-3 bi-facebook"></i></li>
                    <li><i className="bi mx-3 bi-twitter"></i></li>
                    <li><i className="bi mx-3 bi-pinterest"></i></li>

                </ul>

                <p>Design Copied From <a target='_blank' href="https://zyro.com/preview/thos?utm_medium=affiliate&utm_source=aff1635&utm_campaign=aff35&transaction_id=102fe50522d7231b1941dddf2e96b8#desktop">Zyro.com</a></p>
            </div>
        </div>
    )
}
