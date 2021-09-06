import reducer from './projects.reducer'

export { default as projectsTypes } from './projects.types'
export {
  fetchProjectsStart,
  fetchProjectsFail,
  fetchProjectsSuccess,
} from './projects.actions'
export {
  fetchProjects,
} from './projects.effects'
export { selectProject } from './projects.selectors'
export default reducer
