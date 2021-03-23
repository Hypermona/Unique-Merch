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
export const addCartItem = (item) => ({
  type: ActionTypes.ADD_CART_ITEM,
  payload: item,
});
export const deleteCartItem = (itemId) => ({
  type: ActionTypes.DELETE_CART_ITEM,
  payload: itemId,
});
export const addorder = (item) => ({
  type: ActionTypes.ADD_ORDER,
  payload: item,
});
export const removeOrder = (itemId) => ({
  type: ActionTypes.REMOVE_ORDER,
  payload: itemId,
});
