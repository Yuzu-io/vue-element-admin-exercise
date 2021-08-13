export default {
  login(state,user){
    state.user = user
    window.localStorage.setItem('user',JSON.stringify(user))
  },
}