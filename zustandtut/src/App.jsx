import CourseForm from "./components/CourseForm"
import CourseList from "./components/CourseList"

function App() {

  return (
    <>
    <div className="main-container p-8 h-screen bg-gray-800 text-white flex flex-col justify-start items-center border border-white">
      <h1 className="text-4xl mb-8">My Course list</h1>
      <CourseForm />
      <CourseList />
    </div>

    </>
  )
}

export default App
