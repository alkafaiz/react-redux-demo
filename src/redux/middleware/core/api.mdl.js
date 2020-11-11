import { API_REQUEST, apiSuccess, apiError } from "../../actions/api.action";

export const apiMiddleware = ({ dispatch }) => next => action => {
  next(action);

  if (action.type.includes(API_REQUEST)) {
    const { url, method, feature } = action.meta;

    fetch(url, { method })
      .then(response => response.json())
      .then(data => dispatch(apiSuccess({ response: data, feature })))
      .catch(error => dispatch(apiError({ error, feature })));
  }
};
