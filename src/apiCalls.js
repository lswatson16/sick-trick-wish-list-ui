const apiCalls = {
  fetchTricks() {
    return fetch('http://localhost:3001/api/v1/tricks')
      .then(response => {
        return response.json()
      })
      .catch(error => {
        console.log('err in apiCalls', error)
        return error
      } )
  }
}

export default apiCalls;