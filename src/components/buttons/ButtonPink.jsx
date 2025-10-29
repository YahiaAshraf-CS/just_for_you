import React from 'react'
import { NavLink } from 'react-router';

function ButtonPink({
    children = "Click Me",
    to = "/Login",
    className = " bg-[var(--color-prinky)] text-white px-6 py-2 rounded-2xl w-[110px] transition duration-300 ease-in-out border-2 border-[var(--color-prinky)] cursor-pointer hover:bg-transparent flex items-center justify-center w-fit h-[45px] mt-1 hover:text-[var(--color-prinky)]",
}) {
    return (
        <>
            <NavLink className={ className} to={to}>
                {" "}
                {children}
            </NavLink>
        </>
    );
}

export default ButtonPink
