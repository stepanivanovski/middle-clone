import axios from '@/api/axios'

const getUserProfile = slug => {
  return axios.get(`/profiles/${slug}`).then(response => response.data.profile)
}

const followUser = userName => {
  return axios.post(`/profiles/${userName}/follow`).then(response => response.data.profile)
}

const unfollowUser = userName => {
  return axios.delete(`/profiles/${userName}/follow`).then(response => response.data.profile)
}

export default {
  getUserProfile,
  followUser,
  unfollowUser
}
