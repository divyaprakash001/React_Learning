import useCourseStore from "../app/courseStore"
import React from "react"

const CourseList = () => {

  const courses = useCourseStore((state) => state.courses);
  const removeCourse = useCourseStore((state) => state.removeCourse);
  const toggleCourseStatus = useCourseStore((state) => state.toggleCourseStatus);

  // const {courses , removeCourse, toggleCourseStatus} = useCourseStore(
  //   (state)=> ({
  //     courses : state.courses,
  //     removeCourse : state.removeCourse,
  //     toggleCourseStatus : state.toggleCourseStatus,
  //   })
  // )

  return (
    <>
      <ul>
  {courses.map((course, i) => (
    <React.Fragment key={i}>
      <li
        className={`course-item flex justify-between items-center w-96 shadow-md rounded-lg border-2 my-4 p-4 font-bold`}
        style={{
          backgroundColor: course.completed ? "lightgreen" : "white", // Keeping the background color dynamic
          textDecoration: course.completed ? "line-through" : "", // Keeping the background color dynamic
        }}
      >
        <span className="course-item-col-1 flex items-center gap-2">
          <input
            checked={course.completed}
            type="checkbox"
            onChange={() => {
              toggleCourseStatus(course.id);
            }}
            className="form-checkbox"
          />
        </span>
        <span className="text-black">{course?.title}</span>
        <button
          onClick={() => {
            removeCourse(course.id);
          }}
          className="delete-btn px-2 py-1 text-white bg-red-600 rounded-md border-none cursor-pointer"
        >
          Delete
        </button>
      </li>
    </React.Fragment>
  ))}
</ul>

    </>
  )
}

export default CourseList
