import useCourseStore from "../app/courseStore"
import React from "react"
// import { shallow } from 'zustand/shallow'

const CourseList = () => {
  const { courses, removeCourse, toggleCourseStatus } = useCourseStore(
    (state) => ({
      courses: state.courses,
      removeCourse: state.removeCourse,
      toggleCourseStatus: state.toggleCourseStatus,
    })
  );
  console.log(courses);
  

  return (
    <>
      <ul>
        {
          courses.map((course) => {
            return (
              <> 
                <li key={course.id}
                  style={{
                    backgroundColor: course.completed ? "bg-gray-800" : "bg-gray-50"
                  }}
                >
                  <span>
                    <input type="checkbox"
                      checked={course.completed}
                      onChange={() => toggleCourseStatus(course.id)} // This toggles the course completion status
                    />
                  </span>
                  <h2>{course?.title}</h2>
                  <button
                    onClick={() => removeCourse(course.id)} // This removes the course by its id
                    className="px-2 py-1 bg-red-500"
                  >
                    delete
                  </button>
                </li>
              </>
            )
          })
        }
      </ul>
    </>
  )
}

export default CourseList
