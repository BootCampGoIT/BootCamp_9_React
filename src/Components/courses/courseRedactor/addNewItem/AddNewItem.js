import React from "react";
import { AddNewItemContainer } from "./AddNewItemStyled";
import sprite from "../../../../icons/courses/spite.svg";

const AddNewItem = () => {
  return (
    <AddNewItemContainer>
      <div className='courseListItemAddNewContent'>
        <svg className='courseListItemAddNewIcon'>
          <use href={sprite + "#icon-plus"} />
        </svg>
      </div>
    </AddNewItemContainer>
  );
};

export default AddNewItem;
