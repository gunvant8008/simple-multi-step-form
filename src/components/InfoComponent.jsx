function SignUp({ userDetails, handleChange }) {
  return (
    <div className="flex flex-col gap-8 items-center justify-center">
      <h1 className="text-xl font-bold">SIGN UP</h1>
      <input
        type="text"
        placeholder="email"
        name="email"
        value={userDetails.email}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="password"
        name="password"
        value={userDetails.password}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="confirm password"
        name="confirmPassword"
        value={userDetails.confirmPassword}
        onChange={handleChange}
      />
    </div>
  )
}
function PersonalInfo({ userDetails, handleChange }) {
  return (
    <div className="flex flex-col gap-8 items-center justify-center">
      <h1 className="text-xl font-bold">PERSONAL</h1>
      <input
        type="text"
        placeholder="first name"
        name="firstName"
        value={userDetails.firstName}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="last name"
        name="lastName"
        value={userDetails.lastName}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="username"
        name="username"
        value={userDetails.username}
        onChange={handleChange}
      />
    </div>
  )
}
function AddressInfo({ userDetails, handleChange }) {
  return (
    <div className="flex flex-col gap-8 items-center justify-center">
      <h1 className="text-xl font-bold">ADDRESS</h1>
      <input
        type="text"
        placeholder="city"
        name="city"
        value={userDetails.city}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="country"
        name="country"
        value={userDetails.country}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="postcode"
        name="postcode"
        value={userDetails.postcode}
        onChange={handleChange}
      />
    </div>
  )
}
function OthersInfo({ userDetails, handleChange }) {
  return (
    <div className="flex flex-col gap-8 items-center justify-center">
      <h1 className="text-xl font-bold">OTHERS</h1>
      <input
        type="text"
        placeholder="profession"
        name="profession"
        value={userDetails.profession}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="annual income"
        name="annualIncome"
        value={userDetails.annualIncome}
        onChange={handleChange}
      />
    </div>
  )
}

function InfoComponent({ step, userDetails, setUserDetails }) {
  function handleChange(e) {
    e.preventDefault()
    const { name, value } = e.target
    setUserDetails(prev => {
      return { ...prev, [name]: value }
    })
  }

  if (step === 1)
    return <SignUp userDetails={userDetails} handleChange={handleChange} />
  if (step === 2)
    return (
      <PersonalInfo userDetails={userDetails} handleChange={handleChange} />
    )
  if (step === 3)
    return <AddressInfo userDetails={userDetails} handleChange={handleChange} />
  if (step === 4)
    return <OthersInfo userDetails={userDetails} handleChange={handleChange} />
}

export default InfoComponent
