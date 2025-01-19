import { useState } from 'react'
import useCourseStore from '../app/courseStore'


const CourseForm = () => {

  const addCourse = useCourseStore((state) => state.addCourse);
  console.log('addCourse:', addCourse);

  const [courseTitle,setCourseTitle] = useState("")
  console.log('course form rendered');
  
  const handleSubmit = ()=>{
    if(!courseTitle) return alert("please add a course title")
    addCourse({
    id:Date.now(),
    title : courseTitle,
    completed:false
  })
  }


  return (
    <>
    <div className='max-w-[800px] w-[400px] md:w-[600px] border h-[50px] mx-auto'>

     <form className='mx-auto w-full'>
      <input 
      className='border border-gray-500 py-1 w-[70%]'
      type="text"
      value={courseTitle}
      onChange={(e)=> setCourseTitle(e.target.value)}
      />
      <button
      className='px-2 py-1 bg-sky-500'
      type="submit" onClick={()=>handleSubmit()}>Add Course</button>
      </form> 
      </div>
    </>
  )
}

export default CourseForm
