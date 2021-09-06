import React from "react";
import GroupsForm from "./groupsForm/GroupsForm";
import GroupsList from "./groupsList/GroupsList";

const Groups = () => {
  return (
    <>
      <GroupsForm />
      <hr />
      <GroupsList
        filter="1"
        getData={(text) => console.log(text)}
      />
    </>
  );
};

export default Groups;
