export const isLoadingSelector = (state) => state.courses.isLoading;
export const coursesItemsSelector = (state) => state.courses.items;
export const coursesErrorSelector = (state) => state.courses.error;
export const coursesFilterSelector = (state) => state.courses.filter;

export const coursesFilteredItemsSelector = (state) =>
  state.courses.items.filter((item) =>
    item.name.toLowerCase().includes(state.courses.filter.toLowerCase())
  );
