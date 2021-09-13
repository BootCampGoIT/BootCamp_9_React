import React, { useState } from "react";
import AddNewItem from "../../courses/courseRedactor/addNewItem/AddNewItem";
import Modal from "../../modal/Modal";
import GroupsForm from "../groupsForm/GroupsForm";
import GroupsList from "../groupsList/GroupsList";
import { GroupRedactorContainer } from "./GroupRedactorStyled";

const GroupRedactor = () => {
  const [isGroupFormOpen, setGroupFormOpen] = useState(false);

  const toggleCourseForm = () => setGroupFormOpen((prev) => !prev);
  return (
    <GroupRedactorContainer>
      <GroupsList>
        <AddNewItem addItem={toggleCourseForm} />
      </GroupsList>
      {isGroupFormOpen && (
        <Modal closeModal={toggleCourseForm}>
          <div className='courseFormModalWrapper'>
            <GroupsForm closeCourseForm={toggleCourseForm} />
          </div>
        </Modal>
      )}
    </GroupRedactorContainer>
  );
};

export default GroupRedactor;
