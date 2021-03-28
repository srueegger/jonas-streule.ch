export const state = () => ({
  player_name: ''
})

export const mutations = {
  SET_PLAYER_NAME (state, value) {
    state.player_name = value
  }
}