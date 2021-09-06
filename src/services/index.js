const baseUrl = 'http://localhost:4000/'

const startApi = () => {
  window.fetch(`${baseUrl}start`)
}
const turnOfApi = () => {
  window.fetch(`${baseUrl}end`)
}

const apiServices = {
  startApi,
  turnOfApi
}

export default apiServices
