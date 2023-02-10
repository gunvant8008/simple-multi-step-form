import React, { useState } from "react"
import ButtonsContainer from "./ButtonsContainer"
import InfoComponent from "./InfoComponent"
import ProgressBar from "./ProgressBar"

function MultiStepForm() {
  const formSteps = 4
  const [step, setStep] = useState(1)
  const [formSubmit, setFormSubmit] = useState(false)
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    username: "",
    city: "",
    country: "",
    postcode: "",
    profession: "",
    annualIncome: ""
  })

  return (
    <>
      <div className="flex flex-col justify-between gap-14 border-2 p-10 bg-white shadow-xl shadow-gray-500 w-[30rem] h-[40rem]">
        <ProgressBar step={step} formSteps={formSteps} />
        <InfoComponent
          step={step}
          userDetails={userDetails}
          setUserDetails={setUserDetails}
        />
        <ButtonsContainer
          step={step}
          setStep={setStep}
          formSteps={formSteps}
          userDetails={userDetails}
          setFormSubmit={setFormSubmit}
        />
      </div>
      {/* this section is just to show the captured inputs (user details) */}
      <div className="w-[600px] h-[300px]">
        {formSubmit && (
          <div className="flex gap-8 m-10 bg-gray-600 text-white p-5 text-lg font-bold rounded-lg shadow-2xl">
            <div className="flex flex-col gap-2">
              <p>email :{userDetails.email}</p>
              <p>password :{userDetails.password}</p>
              <p>confirm password :{userDetails.confirmPassword}</p>
              <p>first name :{userDetails.firstName}</p>
              <p>last name :{userDetails.lastName}</p>
              <p>username:{userDetails.username}</p>
            </div>

            <div className="flex flex-col gap-2">
              <p>city :{userDetails.city}</p>
              <p>country :{userDetails.country}</p>
              <p>postcode :{userDetails.postcode}</p>
              <p>profession :{userDetails.profession}</p>
              <p>annual income :{userDetails.annualIncome}</p>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default MultiStepForm
