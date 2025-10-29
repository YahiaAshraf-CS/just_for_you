import React from 'react'
import { NavLink } from 'react-router';

function Linkicon({children,to="/" }) {
  return (
      <div>
          <NavLink className={"hover:text-pink-400 transition-all duration-300 ease-in-out"} to={to}>
                {children}
          </NavLink>
      </div>
  );
}

export default Linkicon
