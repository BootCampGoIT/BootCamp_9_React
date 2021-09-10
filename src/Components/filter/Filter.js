import React from "react";
import { useSelector, useDispatch } from "react-redux";
import sprite from "../../icons/base/filter.svg";
import { FilterContainer } from "./FilterStyled";

const Filter = ({ filter, setFilter }) => {
  const dispatch = useDispatch();
  const changeFilter = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <FilterContainer>
      <label className='filterLabel'>
        <svg className='filterIcon'>
          <use href={sprite + "#icon-search"} />
        </svg>
        <input type='text' value={filter} onChange={changeFilter} />
      </label>
    </FilterContainer>
  );
};

export default Filter;
