import React from 'react'

export default function Input({ placeholderTxt, id, className }) {
    return (
        <input placeholder={placeholderTxt} type="text" id={id} className={`bg-[#F1F1F1]  my-3 outline-none  p-[16px] pr-[56px] ${className} `} />
    )
}
