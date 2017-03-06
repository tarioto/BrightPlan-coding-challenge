export function getData() {
  return {
    type: FETCHING_DATA,
  };
}

export function getDataSuccess(data) {
  return {
    type: FETCHING_DATA_SUCCESS,
    data,
  };
}

export function getDataFailure() {
  return {
    type: FETCHING_DATA_FAILURE,
  };
}

export function fetchData() {
  return (dispatch) => {
    dispatch(getData());
    getPeople()
      .then((data) => {
        dispatch(getDataSuccess(data));
      })
      .catch(err => console.log('err:', err));
  };
}
