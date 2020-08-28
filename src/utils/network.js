import axios from "axios";

const axiosWithAuth = () => {
  const token = localStorage.getItem('token')
  return axios.create({
      headers: {
          'Authorization': `Bearer ${token}`
      },
      baseURL: 'https://lre-notapotluck.herokuapp.com'
  })
}

export default axiosWithAuth;