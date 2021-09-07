import axios from 'axios'
import APIS from '../../constants/apis'
import {
  fetchProjectsStart,
  fetchProjectsSuccess,
  fetchProjectsFail,
  fetchOneProjectFail,
  fetchOneProjectStart,
  fetchOneProjectSuccess
} from '.'

export const fetchProjects = () => (dispatch) => {
  dispatch(fetchProjectsStart())
  // TODO: manage locale
  axios.get(`${APIS.PORTFOLIO_SERVER.DOMAIN}${APIS.PORTFOLIO_SERVER.ENDPOINTS.PROJECTS}?_locale=fr`)
    .then((res) => {
      dispatch(fetchProjectsSuccess(res.data))
    })
    .catch((error) => {
      dispatch(fetchProjectsFail(error))
    })
}

export const fetchOneProject = (projectId) => (dispatch) => {
  dispatch(fetchOneProjectStart())
  // TODO: manage locale
  axios.get(`${APIS.PORTFOLIO_SERVER.DOMAIN}${APIS.PORTFOLIO_SERVER.ENDPOINTS.PROJECTS}/${projectId}`)
    .then((res) => {
      dispatch(fetchOneProjectSuccess(res.data))
    })
    .catch((error) => {
      dispatch(fetchOneProjectFail(error))
    })
}
