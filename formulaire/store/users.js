export const ACTIONS = {
  ADD_USER_METHOD: 'users/addUser',
  INIT_USER: 'users/initUser',
}

export const state = () => ({
  users: [],
})

export const mutations = {
  ADD_USER: (state, data) => state.users.push(data),
  INIT_USER: (state) => state.users = []
}

export const actions = {
  addUser({ commit }, data) {
    commit('ADD_USER', data)
  },
  remove({commit}) {
    var current_user = {  'lastName' : this.$cookies.get('lastName'), 'firstName' : this.$cookies.get('firstName'), 'email' : this.$cookies.get('email'), 'password' : this.$cookies.get('password')}
    console.log(state.users)
    console.log('ça passe ')
   state.users.splice( state.users.indexOf(current_user), 1)

    commit('REMOVE_ACCOUNT', current_user)

    console.log(commit)
},
  initUser({ commit }, data) {
    commit('INIT_USER',)
  },
}
