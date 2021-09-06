import { projectsTypes } from '.'

const initialState = {
  loading: false,
  error: null,
  list: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case projectsTypes.PROJECTS_FETCH_START:
      return {
        ...state,
        loading: true,
        error: null,
        list: [],
      }
    case projectsTypes.PROJECTS_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        list: action.payload,
      }
    case projectsTypes.PROJECTS_FETCH_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}
