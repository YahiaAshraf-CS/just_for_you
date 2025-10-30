
import { BrowserRouter, RouterProvider, Routes, Route, Outlet, Link, createBrowserRouter } from "react-router";
import './App.css'

import HomePage from "./pages/HomePage";
import { TbError404 } from "react-icons/tb";
import LoginPage from "./pages/auth/LoginPage";
import SignPage from "./pages/auth/SignPage";
import ButtonPink from "./components/buttons/ButtonPink";
import ProductPage from "./pages/ProductPage";
import WishList from "./pages/WishList";




function App() {

    const routing = createBrowserRouter([
        {
            path: "/just_for_you/",
            element: <HomePage />,

            errorElement: (
                <div className="flex flex-col items-center gap-2 justify-center h-fit ">
                    <TbError404 className="text-9xl text-center text-pink-600 m-auto mt-20" />
                    <h1 className="text-pink-500 font-bold text-5xl text-center">Page not found</h1>
                    <ButtonPink to="/just_for_you/">Back to Home</ButtonPink>
                </div>
            ),
        },
        {
            path: "Login",
            element: <LoginPage />,
            errorElement: (
                <div className="flex flex-col items-center gap-2 justify-center h-fit ">
                    <TbError404 className="text-9xl text-center text-pink-500 m-auto mt-20" />
                    <h1 className="text-pink-600 font-bold text-5xl text-center">Page is not found</h1>
                    <ButtonPink to="/just_for_you/">Back to Home</ButtonPink>
                </div>
            ),
        },
        {
            path: "SignUp",
            element: <SignPage />,
            errorElement: (
                <div className="flex flex-col items-center gap-2 justify-center h-fit ">
                    <TbError404 className="text-9xl text-center text-pink-500 m-auto mt-20" />
                    <h1 className="text-pink-600 font-bold text-5xl text-center">Page not found</h1>
                    <ButtonPink to="/just_for_you/">Back to Home</ButtonPink>
                </div>
            ),
        },
        {
            path: "Product",
            element: <ProductPage />,
            errorElement: (
                <div className="flex flex-col items-center gap-2 justify-center h-fit ">
                    <TbError404 className="text-9xl text-center text-pink-500 m-auto mt-20" />
                    <h1 className="text-pink-600 font-bold text-5xl text-center">Page not found</h1>
                    <ButtonPink to="/just_for_you/">Back to Home</ButtonPink>
                </div>
            ),
        },
        {
            path: "WishList",
            element: <WishList />,
        },
        {
            path: "*",
            element: (
                <div className="flex flex-col items-center gap-2 justify-center h-fit ">
                    <TbError404 className="text-9xl text-center text-pink-500 m-auto mt-20" />
                    <h1 className="text-pink-600 font-bold text-5xl text-center">Page not found</h1>
                    <ButtonPink to="/just_for_you/">Back to Home</ButtonPink>
                </div>
            ),
        },
    ]);
  return (
      <>
          <RouterProvider router={routing} />
          <Outlet />
      </>
  );
}

export default App
