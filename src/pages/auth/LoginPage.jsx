import React from 'react'
import ButtonPink from "../../components/buttons/ButtonPink";
import ButtonLight from "../../components/buttons/ButtonLight";
import Footer from "../../layout/Footer";
import ClipLoader from "react-spinners/ClipLoader";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../style/Login.css"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import MyErrorMessage from '../../components/MyErrorMessage';
import axios from 'axios';
 
function LoginPage() {
    const loginFormSchema = Yup.object({
        email: Yup.string().required() ,
        password:Yup.string().required()
    })
     const navigate = useNavigate();
     const [loading, setLoading] = useState(false);

    
    const handleSign = async (e)=> {
       
        e.preventDefault();
        try {
             setLoading(true);

           
            
            const res = await axios.post("http://localhost:1337/api/auth/local", data);
            const data = {
                identifier: e.email,
                password: e.password,
            }     
            console.log(res);

                
            
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }
    
  

  return (
      <div className="bg-red-100 w-full md:h-screen lg:h-screen xl:h-full sm:h-full   border-2 flex items-start justify-center md:justify-between lg:justify-between xl:justify-center">
          <main className=" w-full h-full border-2  flex items-center gap-12 justify-center md:justify-between lg:justify-between xl:justify-center flex-col">
              <div className="logo w-[80%] mt-12 md:w-[70%] lg:w-[50%] xl:w-[50%] h-fit px-12 py-4   rounded-3xl shadow-xl shadow-pink-400 ">
                  {" "}
                  <h1 className=" text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-center text-pink-600 m-auto ">LoginPage</h1>
                  <p className="text-2xl md:text-3xl lg:text-3xl xl:text-4xl text-center text-pink-600 pt-9 ">Welcome Home</p>
              </div>
              <Formik initialValues={{email: "", password: ""}} validationSchema={loginFormSchema} onSubmit={(e) => handleSign(e)}>
                  <Form className="flex flex-col border-2  border-pink-700  shadow-2xl shadow-pink-400 h-fill w-[80%] md:w-[70%] lg:w-[50%] xl:w-[50%] rounded-3xl px-6 py-6 items-center justify-center gap-10">
                      <Field
                          type="email"
                          name="email"
                         
                         
                          placeholder="Enter your email"
                          className=" outline-0 border-2 w-full px-4 py-2.5 rounded-2xl placeholder:text-pink-600 border-pink-600 focus:border-pink-800 focus:shadow-3xl focus:text-pink-700 focus:bg-pink-200"
                      />
                      <MyErrorMessage name="email" component="div" className="text-red-500 text-2xl" />

                      <Field
                          type="password"
                          name="password"
                         
                          placeholder="Enter your password"
                          className=" outline-0 border-2 w-full px-4 py-2.5 rounded-2xl placeholder:text-pink-600 border-pink-600 focus:border-pink-800 focus:shadow-3xl focus:text-pink-700 focus:bg-pink-200"
                      />
                      <MyErrorMessage name="password" component="div" className="text-red-500 text-2xl" />
                      <div className="btns w-full gap-6  h-fit flex items-center justify-center flex-col">
                          <button
                              className="w-[100%] rounded-2xl cursor-pointer px-4 py-2 text-2xl text-white border-[var(--color-prinky)] bg-[var(--color-prinky)] hover:bg-transparent transition duration-300 ease-in-out hover:shadow-2xl hover:text-[var(--color-prinky)] border-2 flex items-center justify-center"
                              type="submit">
                              {loading ? (
                                  <p>
                                      {" "}
                                      <ClipLoader size={20} color="white" /> Loading
                                  </p>
                              ) : (
                                  "Login"
                              )}
                          </button>
                          <button
                              type="button"
                              onClick={() => navigate("/signUp")}
                              className="text-2xl rounded-2xl px-4 py-2 w-full text-[var(--color-prinky)] transition duration-300 ease-in-out border-2 border-[var(--color-prinky)] hover:border-2 hover:bg-[var(--color-prinky)] hover:text-white hover:shadow-2xl hover:shadow-pink-400 cursor-pointer bg-transparent flex items-center justify-center ">
                              I don't have an account
                          </button>
                          <button
                              type="button"
                              onClick={() => navigate("/")}
                              className="bg-[var(--color-creamy)] text-2xl w-[100%] px-4 py-2 h-[45px] text-[var(--color-prinky)] rounded-2xl  px-6 py-2 rounded transition duration-300 ease-in-out border-2 border-[var(--color-creamy)] hover:border-2 hover:border-amber-400 cursor-pointer hover:bg-transparent flex items-center justify-center hover:text-amber-400">
                              Back to Home
                          </button>
                         
                      </div>
                  </Form>
              </Formik>
              <Footer></Footer>
          </main>
      </div>
  );
}
 
export default LoginPage

