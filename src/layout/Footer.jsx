import React from 'react'
import { NavLink } from 'react-router';
import logoimg from '../assets/images/logoimg.jpeg';
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import '../style/Footer.css';
import Linkicon from '../components/links/Linkicon';



function Footer() {
  return (
      <>
          <footer className=" w-[100%] md:w-[100%] lg:w-[100%] xl:w-[100%]  border-2 px-10 py-10 h-fit  mt-10 bg-[var(--color-dark)] flex flex-col items-center justify-center gap-1.4 lg:gap-3 xl:gap-4 p-3">
              <div className="links w-full flex items-center flex-col gap-5 justify-center md:justify-evenly md:px-18 md:flex-row lg:justify-around lg:px-20  lg:gap-0 xl:justify-between xl:px-0 xl:gap-28 border-b-2 border-b-gray-500 pb-6">
                  <ul className="list-none flex items-center justify-center gap-4 sm:gap-3 md:gap-6 lg:gap-8 xl:gap-10 text-white">
                      <li>
                          <div className="logo">
                              <img
                                  className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px] xl:w-[65px] xl:h-[65px] rounded-tr-2xl hover:rounded-br-2xl hover:rounded-tl-2xl transition-all duration-300 ease-in-out cursor-pointer  rounded-bl-2xl"
                                  src={logoimg}
                                  alt=""
                              />
                          </div>
                      </li>
                      <li>
                          {" "}
                          <Linkicon to="/just_for_you/"> Home</Linkicon>{" "}
                      </li>
                      <li>
                          {" "}
                          <Linkicon to="/product">Products</Linkicon>{" "}
                      </li>
                      <li>
                          {" "}
                          <Linkicon to="/wishlist"> Wishlist</Linkicon>{" "}
                      </li>
                  </ul>
                  <div className="socials flex items-center justify-center gap-7">
                      <NavLink to={"https://www.facebook.com/share/1FV7p9HRC9/"}>
                          {" "}
                          <FaFacebook className="text-white w-[23px] h-[23px] cursor-pointer hover:text-blue-600 transition-all duration-300 ease-in-out" />{" "}
                      </NavLink>
                      <NavLink to={"https://chat.whatsapp.com/D3hnzXbYPeL0ZPPN37g6JN?mode=ems_copy_t_invite&app_absent=0"}>
                          {" "}
                          <IoLogoWhatsapp className="text-white w-[23px] h-[23px] cursor-pointer hover:text-green-600 transition-all duration-300 ease-in-out" />{" "}
                      </NavLink>
                      <NavLink to={""}>
                          {" "}
                          <FaInstagram className="text-white w-[23px] h-[23px] cursor-pointer hover:text-pink-600 transition-all duration-300 ease-in-out" />{" "}
                      </NavLink>
                      <NavLink to={"https://t.me/+iYwYMNCpxkQ1NjA0"}>
                          {" "}
                          <FaTelegramPlane className="text-white w-[23px] h-[23px] cursor-pointer hover:text-blue-600 transition-all duration-300 ease-in-out" />{" "}
                      </NavLink>
                  </div>
              </div>
              <div className="copyrights">
                  <p className="text-[var(--color-creamy)] text-center">Copyright &copy; 2025 Just For You</p>
              </div>
          </footer>
      </>
  );
}

export default Footer
