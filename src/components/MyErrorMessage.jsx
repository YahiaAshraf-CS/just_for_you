import React from 'react'
import { ErrorMessage } from 'formik'

function MyErrorMessage({ name}) {
  return (
      <>
          <ErrorMessage name={name} >
              {(msg) => <span className="text-red-500 text-2xl">{msg}</span>}
          </ErrorMessage>
      </>
  );
}

export default ErrorMessage
