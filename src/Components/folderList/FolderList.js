import React, { useState } from "react";

import sprite from "../../icons/courses/spite.svg";
import { FolderListContainer } from "./FolderListStyled";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { deleteCourse, patchCourseByID } from "../../services/coursesAPI";
import data from "../../data/courses.json";
console.log("data :>> ", data);

const FolderList = ({ arr, patchCourse }) => {
  const history = useHistory();
  const [courseEdited, setCourseEdited] = useState({});

  const openDetails = (e) => {
    history.push(history.location.pathname + `/${e.currentTarget.id}`);
  };
  const onSaveCourse = async () => {
    try {
      await patchCourseByID(courseEdited).then(() => patchCourse(courseEdited));
      setCourseEdited({});
    } catch (error) {
      console.log(error);
    }
  };

  const onCancel = () => setCourseEdited({});

  const onDeleteCourse = (e) => {
    deleteCourse(e.currentTarget.id);
  };

  const onChangeCourse = (e) => {
    setCourseEdited((prev) => ({ ...prev, name: e.target.value }));
  };

  const editCourse = (e) =>
    setCourseEdited(arr.find((course) => course.id === e.currentTarget.id));
  return (
    <FolderListContainer>
      {arr.map((item) => (
        <li className='folderItem' key={item.id}>
          <div className='folderContainer'>
            <div className='folderIconContainer'>
              <svg className='folderIcon'>
                <use
                  href={
                    sprite +
                    (item.modules?.length
                      ? "#icon-folder-open"
                      : "#icon-folder")
                  }
                />
              </svg>
            </div>
            {courseEdited.id !== item.id ? (
              <span className='folderTitle'>{item.name}</span>
            ) : (
              <input
                type='text'
                value={courseEdited.name}
                onChange={onChangeCourse}
              />
            )}

            {courseEdited.id !== item.id ? (
              <>
                <div
                  className='folderItemOption'
                  id={item.id}
                  onClick={openDetails}>
                  <svg className='folderItemOptionIcon'>
                    <use href={sprite + "#icon-eye"} />
                  </svg>
                </div>
                <div
                  className='folderItemOption'
                  id={item.id}
                  onClick={editCourse}>
                  <svg className='folderItemOptionIcon'>
                    <use href={sprite + "#icon-pencil2"} />
                  </svg>
                </div>
                <div
                  className='folderItemOption'
                  id={item.id}
                  onClick={onDeleteCourse}>
                  <svg className='folderItemOptionIcon'>
                    <use href={sprite + "#icon-bin"} />
                  </svg>
                </div>
              </>
            ) : (
              <>
                <div className='folderItemOption' onClick={onSaveCourse}>
                  <svg className='folderItemOptionIcon'>
                    <use href={sprite + "#icon-floppy-disk"} />
                  </svg>
                </div>
                <div className='folderItemOption' onClick={onCancel}>
                  <svg className='folderItemOptionIcon'>
                    <use href={sprite + "#icon-cross"} />
                  </svg>
                </div>
              </>
            )}
          </div>
          <div className='folderListContainer'>
            {item.modules?.length && <FolderList arr={item.modules} />}
          </div>
        </li>
      ))}
    </FolderListContainer>
  );
};

export default FolderList;

// const coursesArr = [
//   {
//     id: {
//       parent: 0,
//       current: 1,
//     },
//     name: "Html",
//   },
//   {
//     parentId: 0,
//     currentId: 2,
//     name: "Html",
//   },
//   {
//     parentId: 1,
//     currentId: 3,
//     name: "Lesson1",
//   },
//   {
//     parentId: 1,
//     currentId: 4,
//     name: "Lesson2",
//   },
//   {
//     parentId: 2,
//     currentId: 5,
//     name: "Lesson1",
//   },
//   {
//     parentId: 2,
//     currentId: 5,
//     name: "Lesson1",
//   },
// ];
