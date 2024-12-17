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
  axios.get(`${APIS.PORTFOLIO_SERVER.DOMAIN}${APIS.PORTFOLIO_SERVER.ENDPOINTS.PROJECTS}?_locale=fr&sort[0]=date:desc&populate=thumbnail`)
    .then((res) => {
      dispatch(fetchProjectsSuccess(res.data.data))
    })
    .catch((error) => {
      dispatch(fetchProjectsFail(error))
    })
}

export const fetchOneProject = (projectId) => (dispatch) => {
  dispatch(fetchOneProjectStart())
  // TODO: manage locale
  axios.get(`${APIS.PORTFOLIO_SERVER.DOMAIN}${APIS.PORTFOLIO_SERVER.ENDPOINTS.PROJECTS}/${projectId}?&populate[thumbnail]=true&populate[technologies][populate]=icon`)
    .then((res) => {
      dispatch(fetchOneProjectSuccess(res.data.data))
    })
    .catch((error) => {
      dispatch(fetchOneProjectFail(error))
    })
}
