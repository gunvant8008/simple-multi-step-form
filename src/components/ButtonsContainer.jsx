function ButtonsContainer({
  step,
  setStep,
  formSteps,
  userDetails,
  setFormSubmit
}) {
  function handleClickForNextBtn() {
    if (step < formSteps) {
      setStep(step + 1)
    } else {
      setFormSubmit(true)
    }
  }
  return (
    <div className="flex justify-between">
      <button disabled={step === 1} onClick={() => setStep(step - 1)}>
        Back
      </button>
      <button onClick={handleClickForNextBtn}>
        {step === formSteps ? "Submit" : "Next"}
      </button>
    </div>
  )
}

export default ButtonsContainer
