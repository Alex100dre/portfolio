import { connect } from 'react-redux'
import Project from './Project.component'
import {fetchOneProject} from "../../store/projects";

const mapStateToProps = ({projects}) => ({
  ...projects.view
})
const mapDispatchToProps = dispatch => ({
  fetchOneProject: (projectId) => dispatch(fetchOneProject(projectId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Project)
