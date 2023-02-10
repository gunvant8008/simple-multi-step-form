import "./App.css"
import MultiStepForm from "./components/MultiStepForm"

function App() {
  return (
    <>
      <div className="bg-gray-400 flex flex-col items-center justify-center w-[100vw] h-[100vh]">
        <h1 className="text-4xl m-10 bg-slate-700 p-4 shadow-lg text-white">
          MULTI-STEP FORM{" "}
        </h1>
        <MultiStepForm />
      </div>
    </>
  )
}

export default App
