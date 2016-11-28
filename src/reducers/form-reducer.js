export default (state = {}, action) => {
  switch(action.type) {
    case 'UPDATE_FIELD':
    case 'ADD_ERROR':
      const { formName } = action.payload;
      return {
        ...state,
        [formName]: formReducer(state[formName], action)
      }
    default:
      return state;
  }
}

function formReducer(state = {}, action) {
  const { fieldName } = action.payload;
  return {
    ...state,
    [fieldName]: fieldReducer(state[fieldName], action)
  }
}

function fieldReducer(state={}, action) {
  switch(action.type) {
    case 'UPDATE_FIELD':
      return {
        ...state,
        value: action.payload.fieldValue
      }
    case 'ADD_ERROR':
      return {
        ...state,
        error: action.payload.error
      }
    default:
      return state;
  }
}
