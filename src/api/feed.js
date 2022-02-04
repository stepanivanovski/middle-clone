import axios from '@/api/axios'

const getFeed = (apiUrl, params) => {
  return axios.get(apiUrl, {params: {...params}})
}

export default {
  getFeed
}
