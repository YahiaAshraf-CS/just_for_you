import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'

function AppRouter() {
  return (
      <>
          <Routes>{/* this for the all pages routes in the app */}

              <Route path="/" element={<HomePage />}>{ /* this for the home page */}
                  <Route index path='home'  />{ /** this for the home page  */ }
              </Route>
          </Routes>
      </>
  );
}

export default AppRouter
