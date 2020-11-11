import { SET_LOADER } from "../actions/ui.action";

const initState = {
  loading: []
};

export const uiReducer = (ui = initState, action) => {
  switch (true) {
    case action.type.includes(SET_LOADER):
      return {
        ...ui,
        loading: action.payload
          ? [...ui.loading, action.meta.feature]
          : ui.loading.filter(feature => feature !== action.meta.feature)
      };

    default:
      return ui;
  }
};
