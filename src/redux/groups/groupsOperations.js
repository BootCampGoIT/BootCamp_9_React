import axios from "axios";
import { createGroup, getGroups, setError, setLoader } from "./groupsActions";

export const getGroupsOperation = () => async (dispatch, getState) => {
  const tokenId = getState().auth.tokens.tokenId;
  dispatch(setLoader());
  try {
    const response = await axios.get(
      process.env.REACT_APP_BASE_URL + `/groups.json?auth=${tokenId}`
    );
    if (response.data) {
      const groups = Object.keys(response.data).map((key) => ({
        id: key,
        ...response.data[key],
      }));

      dispatch(getGroups(groups));
      return;
    }
    // dispatch(getGroups([]));
  } catch (error) {
    dispatch(setError(error));
  } finally {
    dispatch(setLoader());
  }
};

export const addGroupOperation = (group) => async (dispatch, getState) => {
  const tokenId = getState().auth.tokens.tokenId;
  dispatch(setLoader());
  try {
    const response = await axios.post(
      process.env.REACT_APP_BASE_URL + `/groups.json?auth=${tokenId}`,
      group
    );
    dispatch(createGroup({ id: response.data.name, ...group }));
  } catch (error) {
    dispatch(setError(error));
  } finally {
    dispatch(setLoader());
  }
};
