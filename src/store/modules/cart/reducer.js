let defaultState = JSON.parse(localStorage.getItem("@kenzieShop:cart")) || [];

export const reducerCart = (state = defaultState, action) => {
  switch (action.type) {
    case "addProd":
      return action.retorno;

    case "remProd":
      return action.retorno;

    case "addOneProd":
      return action.retorno;

    case "remOneProd":
      return action.retorno;

    default:
      return state;
  }
};
