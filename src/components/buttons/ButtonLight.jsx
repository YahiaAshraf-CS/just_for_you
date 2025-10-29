import React from 'react'
import { NavLink } from 'react-router';
function ButtonLight({
    children = "Click Me",
    to = "/",
    className = " bg-[var(--color-creamy)] w-fit h-[45px] text-[var(--color-prinky)] rounded-2xl w-fit px-6 py-2 rounded transition duration-300 ease-in-out border-2 border-[var(--color-creamy)] cursor-pointer hover:bg-transparent flex items-center justify-center hover:text-amber-400"
})
{
    return (
        <>
            <NavLink
                className={ className}
                to={to}>
                {children}
            </NavLink>
        </>
    );
}

export default ButtonLight
