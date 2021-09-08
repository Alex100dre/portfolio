import reducer from './projects.reducer'

export { default as projectsTypes } from './projects.types'
export {
  fetchProjectsStart,
  fetchProjectsFail,
  fetchProjectsSuccess,
  fetchOneProjectFail,
  fetchOneProjectStart,
  fetchOneProjectSuccess
} from './projects.actions'
export {
  fetchProjects,
  fetchOneProject,
} from './projects.effects'
export { selectProject } from './projects.selectors'
export default reducer
