import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCourseByID } from "../../../services/coursesAPI";
import { CourseDetailsContainer } from "./CourseDetailsStyled";

const CourseDetails = () => {
  const [course, setCourse] = useState(null);
  const { courseId } = useParams();

  useEffect(() => {
    getCourseByID(courseId).then((res) => setCourse(res));
  }, [courseId]);
  return (
    <>
      {course && (
        <CourseDetailsContainer>
          <div className='courseDetailsContent'>
            <div className='courseDetailsAvatarBlock'>
              <img
                src={course.avatar}
                alt={course.name}
                className='courseDetailsAvatar'
              />
            </div>
            <div className='courseDetailsTitleBlock'>
              <h2 className='courseDetailsTitle'>{course.name}</h2>
            </div>
          </div>
          <p className="courseDetailsDescription">{course.description}</p>
        </CourseDetailsContainer>
      )}
    </>
  );
};

export default CourseDetails;
