import React from "react";
import GroupDetails from "../Components/groups/groupDetails/GroupDetails";
import { useRouteMatch, Switch, Route } from "react-router-dom";
import GroupsList from "../Components/groups/groupsList/GroupsList";

const GroupsPage = () => {
  const match = useRouteMatch();
  return (
    <>
      <Switch>
        <Route path={match.path + `/:groupId`} exact component={GroupDetails} />
        <Route path={match.path} exact component={GroupsList} />
      </Switch>
    </>
  );
};

export default GroupsPage;
