import { projectsTypes } from '.'

export const fetchProjectsStart = () => (
  { type: projectsTypes.PROJECTS_FETCH_START }
)

export const fetchProjectsSuccess = projects => (
  {
    type: projectsTypes.PROJECTS_FETCH_SUCCESS,
    payload: projects,
  }
)

export const fetchProjectsFail = error => (
  {
    type: projectsTypes.PROJECTS_FETCH_FAIL,
    payload: error,
  }
)
