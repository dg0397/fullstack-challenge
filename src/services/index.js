const baseUrl = 'http://localhost:4000/'

const startApi = () => {
    fetch(`${baseUrl}start`)
}
const turnOfApi = () => {
    fetch(`${baseUrl}end`)
}

const apiServices = {
  startApi,
  turnOfApi
}

export default apiServices