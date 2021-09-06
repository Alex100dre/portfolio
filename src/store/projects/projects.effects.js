import axios from 'axios'
import APIS from '../../constants/apis'
import {
  fetchProjectsStart,
  fetchProjectsSuccess,
  fetchProjectsFail,
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
