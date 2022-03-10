import userProfileApi from '@/api/userProfile'

const state = {
  data: null,
  isLoading: false,
  error: null,
  isSubmiting: false
}

export const mutationTypes = {
  getUserProfileStart: '[userProfile] Get user profile start',
  getUserProfileSuccess: '[userProfile] Get user profile success',
  getUserProfileFailure: '[userProfile] Get user profile failure',
  followUserStart: '[userProfile] Follow user start',
  followUserSuccess: '[userProfile] Follow user  success',
  followUserFailure: '[userProfile] Follow user  failure'
}

export const actionTypes = {
  getUserProfile: '[userProfile] Get user profile',
  followUser: '[followUser] Follow user'
}

const mutations = {
  [mutationTypes.getUserProfileStart](state) {
    state.isLoading = true
    state.data = null
  },
  [mutationTypes.getUserProfileSuccess](state, payload) {
    state.isLoading = false
    state.data = payload
  },
  [mutationTypes.getUserProfileFailure](state) {
    state.isLoading = false
  },
  [mutationTypes.followUserStart](state) {
    state.isSubmiting = true 
  },
  [mutationTypes.followUserSuccess](state, payload) {
    state.data = payload
    state.isSubmiting = false
  },
  [mutationTypes.followUserFailure](state) {
    state.isSubmiting = false
  },
}

const actions = {
  [actionTypes.getUserProfile](context, {slug}) {
    return new Promise(resolve => {
      context.commit(mutationTypes.getUserProfileStart)
      userProfileApi
        .getUserProfile(slug)
        .then(userProfile => {
          context.commit(mutationTypes.getUserProfileSuccess, userProfile)
          resolve(userProfile)
        })
        .catch(() => {
          context.commit(mutationTypes.getUserProfileFailure)
        })
    })
  },
  [actionTypes.followUser](context, {userName, following}) {
    return new Promise(resolve => {
      context.commit(mutationTypes.followUserStart)
      
      if (!following) {
        userProfileApi
          .followUser(userName)
          .then(userProfile => {
            context.commit(mutationTypes.followUserSuccess, userProfile)
            resolve(userProfile)
          })
          .catch(() => {
            context.commit(mutationTypes.followUserFailure)
          })
      } else {
        userProfileApi
          .unfollowUser(userName)
          .then(userProfile => {
            context.commit(mutationTypes.followUserSuccess, userProfile)
            resolve(userProfile)
          })
          .catch(() => {
            context.commit(mutationTypes.followUserFailure)
          })
      }
    })
  }
}

export default {
  state,
  actions,
  mutations
}
