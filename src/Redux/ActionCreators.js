import * as ActionTypes from "./ActionTypes";

export const postFavorite = (itemId) => (dispatch) => {
  setTimeout(() => {
    dispatch(addFavorite(itemId));
  }, 200);
};
export const addFavorite = (itemId) => ({
  type: ActionTypes.ADD_FAVORITE,
  payload: itemId,
});
export const deleteFavorite = (itemId) => ({
  type: ActionTypes.DELETE_FAVORITE,
  payload: itemId,
});
