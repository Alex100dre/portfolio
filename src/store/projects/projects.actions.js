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

export const fetchOneProjectStart = () => (
  { type: projectsTypes.PROJECTS_FETCH_ONE_START }
)

export const fetchOneProjectSuccess = project => (
  {
    type: projectsTypes.PROJECTS_FETCH_ONE_SUCCESS,
    payload: project,
  }
)

export const fetchOneProjectFail = error =>  (
  {
    type: projectsTypes.PROJECTS_FETCH_ONE_FAIL,
    payload: error,
  }
)