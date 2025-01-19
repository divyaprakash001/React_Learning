import { useState } from 'react'
import useCourseStore from '../app/courseStore'


const CourseForm = () => {

  const addCourse = useCourseStore((state) => state.addCourse);
  console.log('addCourse:', addCourse);

  const [courseTitle,setCourseTitle] = useState("")
  console.log('course form rendered');
  
  const handleCourseSubmit = ()=>{
    if(!courseTitle) return alert("please add a course title")
    addCourse({
    id:Date.now(),
    title : courseTitle,
    completed:false
  })
  }


  return (
    <>
    <div className="flex justify-center items-center w-full">
      <form>

  <input
    value={courseTitle}
    onChange={(e) => {
      setCourseTitle(e.target.value);
    }}
    className="p-3 border border-gray-200 outline-none w-72 text-black"
    />
  <button
    onClick={() => {
      handleCourseSubmit();
    }}
    className="bg-gray-600 p-3 border border-gray-600 text-white font-semibold cursor-pointer"
    >
    Add Course
  </button>
    </form>
</div>

    </>
  )
}

export default CourseForm
