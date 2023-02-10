function ProgressBar({ step, formSteps }) {
  return (
    <>
      <div className="w-full bg-gray-200 h-2 mb-6 text-center">
        <div
          className="bg-green-500 h-2 transition-all"
          style={{ width: `${step * 25}%` }}
        ></div>
        <p className="m-2 text-gray-500 font-bold">
          {step}/{formSteps}
        </p>
      </div>
    </>
  )
}

export default ProgressBar
