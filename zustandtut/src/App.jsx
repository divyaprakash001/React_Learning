import CourseForm from "./components/CourseForm"
import CourseList from "./components/CourseList"

function App() {

  return (
    <>
    <div>
      <h1 className="text-2xl text-center bg-slate-500">Course Form</h1>
      <CourseForm/>
      <CourseList/>
    </div>
    </>
  )
}

export default App
