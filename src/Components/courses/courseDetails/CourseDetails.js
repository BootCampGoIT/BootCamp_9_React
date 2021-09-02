import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CourseDetails = () => {
  const [course, setCourse] = useState(null);
  const { courseID } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://bc-9-platform-default-rtdb.firebaseio.com/courses/${courseID}.json`
      )
      .then((res) => setCourse(res.data));
  }, [courseID]);
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
