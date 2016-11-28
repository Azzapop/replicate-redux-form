import _ from 'lodash';

export const updateField = (formName) => (fieldName, fieldValue) => (dispatch) => (
  dispatch({
    type: "UPDATE_FIELD",
    payload: {
      formName,
      fieldName,
      fieldValue,
    }
  })
)

export const checkErrors = (formName) => (fields) => (dispatch) => (
  _.map(fields, function(fieldValue, fieldName) {
    console.log(fieldValue, fieldValue.length===0);
    if (fieldName === undefined || fieldValue === "") {
      dispatch({
        type: "ADD_ERROR",
        payload: {
          formName,
          fieldName,
          error: `${fieldName} cannot be blank`
        }
      })
    }
  })
)
