import { projectsTypes } from '.'

const initialState = {
  list: {
    loading: false,
    error: null,
    data: [],
  },
  view: {
    loading: false,
    error: null,
    data: {}
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case projectsTypes.PROJECTS_FETCH_START:
      return {
        ...state,
        list: {
          ...state.list,
          loading: true,
          error: null,
          data: [],
        }
      }
    case projectsTypes.PROJECTS_FETCH_SUCCESS:
      return {
        ...state,
        list: {
          ...state.list,
          loading: false,
          data: action.payload
        },
      }
    case projectsTypes.PROJECTS_FETCH_FAIL:
      return {
        ...state,
        list: {
          ...state.list,
          loading: false,
          error: action.payload,
        }
      }
    case projectsTypes.PROJECTS_FETCH_ONE_START:
      return {
        ...state,
        view: {
          ...state.view,
          loading: true,
          error: null,
          data: {},
        }
      }
    case projectsTypes.PROJECTS_FETCH_ONE_SUCCESS:
      return {
        ...state,
        view: {
          ...state.view,
          loading: false,
          data: action.payload,
        }
      }
    case projectsTypes.PROJECTS_FETCH_ONE_FAIL:
      return {
        ...state,
        view: {
          ...state.view,
          loading: false,
          error: action.payload,
        }
      }
    default:
      return state
  }
}
