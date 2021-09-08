export const selectProject = ({ projects }, id) => (
   projects.list.data.find(project => project.id === parseInt(id, 10))
)
