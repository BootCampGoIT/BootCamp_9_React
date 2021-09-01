import axios from "axios";
import React, { useEffect } from "react";

const CourseDetails = (props) => {
  console.log("props.match :>> ", props.match.params.courseId);

  useEffect(() => {
    const getData = async () => {
      await axios.get(
        `https://bc-9-platform-default-rtdb.firebaseio.com/courses/${props.match.params.courseId}.json`
      );
    };
    getData();
  }, [props.match.params.courseId]);
  return <h2>Course details</h2>;
};

export default CourseDetails;
