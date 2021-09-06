export const selectProject = ({ projects }, id) => {
  const result = projects.list.find(project => project.id === parseInt(id, 10))
  console.log('SELECTOR RETURN => ', result)
  return result
}
