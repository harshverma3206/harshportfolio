import React, { useRef } from 'react'

import { GoHomeFill } from "react-icons/go";
import { FaUser } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { FaGraduationCap } from "react-icons/fa6";
import { IoDocumentText } from "react-icons/io5";

const Navigation = ({ onNavigate }) => {

    const icons = [
        { id: "home", icon: <GoHomeFill size={25} color="gray" /> },
        { id: "skills", icon: <FaGraduationCap size={25} color="gray" /> },
        { id: "project", icon: <IoDocumentText size={25} color="gray" /> },
        { id: "about", icon: <FaUser size={25} color="gray" /> },
        { id: "contact", icon: <IoMdCall size={25} color="gray" /> },
    ];

    return (
        <>
            <h1 className='z-50! fixed top-6 sm:top-10 backdrop-blur-2xl rounded-2xl p-1! px-3!'>Portfolio</h1>
            <div className='z-50! fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center justify-center gap-2 px-2! sm:gap-4 rounded-2xl'>
                {icons.map((e) => {
                    return (
                        <button
                            onClick={() => onNavigate(e.id)}
                            key={e.id}
                            className='transition-transform duration-300 hover:scale-125 active:scale-100 p-3! sm:p-4! rounded-2xl bg-[#a6a6a6]/30'>
                            {e.icon}
                        </button>
                    )
                })}
            </div>
        </>
    )
}

export default Navigation
