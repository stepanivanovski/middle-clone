import authApi from '@/api/auth'
import {setItem} from '@/helpers/persistanceStorage'

const state = {
  isSubmitting: false,
  currentUser: null,
  isLoggedIn: null,
  validationErrors: null
}

export const mutationTypes = {
  registerStart: '[auth] Register start',
  registerSuccess: '[auth] Register success',
  registerFailure: '[auth] Register failure',

  loginStart: '[auth] Login start',
  loginSuccess: '[auth] Login success',
  loginFailure: '[auth] Login failure'
}

export const actionTypes = {
  register: '[auth] Register',
  login: '[auth] Login'
}

const mutations = {
  [mutationTypes.registerStart](state) {
    state.isSubmitting = true
    state.validationErrors = null
  },
  [mutationTypes.registerSuccess] (state, payload) {
    state.isSubmitting = false
    state.isLoggedIn = true
    state.currentUser = payload
  },
  [mutationTypes.registerFailure](state, payload) {
    state.isSubmitting = false
    state.validationErrors = payload
  },
  [mutationTypes.loginStart](state) {
    state.isSubmitting = true
    state.validationErrors = null
  },
  [mutationTypes.loginSuccess](state, payload) {
    state.isSubmitting = false
    state.isLoggedIn = true
    state.currentUser = payload
  },
  [mutationTypes.loginFailure](state, payload) {
    state.isSubmitting = false
    state.validationErrors = payload
  }
}

const actions = {
  [actionTypes.register] ({ commit }, credentials) {
    return new Promise(resolve => {
      commit(mutationTypes.registerStart)
      authApi
      authApi
        .register(credentials)
        .then(response => {
          commit(mutationTypes.registerSuccess, response.data.user)
          setItem('accessToken', response.data.user.token)
          resolve(response.data.user)
        })
        .catch(result => {
          commit(mutationTypes.registerFailure, result.response.data.errors)
        })
    })
  },
  [actionTypes.login]({commit}, credentials) {
    return new Promise(resolve => {
      commit(mutationTypes.loginStart)
      authApi
        .login(credentials)
        .then(response => {
          commit(mutationTypes.loginSuccess, response.data.user)
          setItem('accessToken', response.data.user.token)
          resolve(response.data.user)
        })
        .catch(result => {
          commit(
            mutationTypes.loginFailure,
            result.response.data.errors
          )
        })
    })
  }
}

export default {
  state,
  actions,
  mutations
  // getters
}
