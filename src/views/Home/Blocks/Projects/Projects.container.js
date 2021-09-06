import { connect } from 'react-redux'
import Projects from './Projects.component'
import { fetchProjects } from '../../../../store/projects'


const mapStateToProps = ({ projects }) => ({
  ...projects,
})

const mapDispatchToProps = dispatch => ({
  fetchProjects: () => dispatch(fetchProjects()),
})

export default connect(mapStateToProps, mapDispatchToProps)(
  Projects,
)
