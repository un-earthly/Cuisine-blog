import React from 'react'

export default function Button({ btnText }) {
    return (
        <button type="submit" name="submit" className="px-8 py-4 bg-black text-white text-center mx-auto block duration-500 hover:bg-[#272927]">{btnText}</button>
    )
}
