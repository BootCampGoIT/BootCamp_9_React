import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCourseByID } from "../../../services/coursesAPI";

const CourseDetails = () => {
  const [course, setCourse] = useState(null);
  const { courseId } = useParams();


  useEffect(() => {
    getCourseByID(courseId).then((res) => setCourse(res));
  }, [courseId]);
  return (
    <>
      {course && (
        <div className='courseListItemContent'>
          <div className='courseAvatarBlock'>
            <img
              width='300'
              src={course.avatar}
              alt={course.name}
              className='courseAvatar'
            />
          </div>
          <div className='courseListItemTitleBlock'>
            <h2 className='courseListItemTitle'>{course.name}</h2>
          </div>
          <p>{course.description}</p>
        </div>
      )}
    </>
  );
};

export default CourseDetails;
