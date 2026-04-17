import React from 'react'
import { GoHomeFill } from "react-icons/go";
import { FaUser } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { FaGraduationCap } from "react-icons/fa6";
import { IoDocumentText } from "react-icons/io5";

const Navigation = () => {

    const icons = {
        project: <IoDocumentText size={25} color='white' />,
        skills: <FaGraduationCap size={25} color='white' />,
        home: <GoHomeFill size={25} color='white' />,
        about: <FaUser size={25} color='white' />,
        contact: <IoMdCall size={25} color='white' />,
    }

    return (
        <div className='fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center justify-center gap-2 sm:gap-4'>
            {Object.values(icons).map((icon, index) => {
                return (
                    <button key={index} className='p-3! sm:p-4! rounded-2xl bg-[#a6a6a6]/90 backdrop-blur-xl backdrop-saturate-150 border border-gray-400/20'>
                        {icon}
                    </button>
                )
            })}
        </div>
    )
}

export default Navigation
