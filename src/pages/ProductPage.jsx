import React from 'react'
import NavbarUser from '../layout/NavbarUser';

function ProductPage() {
  /*
   const location = useLocation(); !!!! this is in react router-dom v6
   const path=location.pathname; to define the pathname page in the router
   const pageName=path.split("/")[1];   
   or
   const pageName=path.replace("/","");
   or
   const pageName= path==="/" ? "home" : path.replace("/","");
  */ 
  return (

    <>
      <NavbarUser/>
          <h2 className='text-9xl text-center text-pink-600 m-auto mt-20'>Product</h2>
          
    </>
  )
}

export default ProductPage
