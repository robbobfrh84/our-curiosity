function Root(method, state, data) {
  switch (method) {
    case "READ": return this.state[state]
    case "SET": this.setState({[state]: data}); break
    case "ADD_PAGE": this.addPage(data); break
    case "SET_USER": this.setStatus(data); break
    default:
      return "unknown status update"
  }
}
export default Root
