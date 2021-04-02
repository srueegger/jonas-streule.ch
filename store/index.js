export const state = () => ({
  player_name: '',
  total_points: 0
})

export const mutations = {
  SET_PLAYER_NAME (state, value) {
    state.player_name = value
  },
  SET_TOTAL_POINTS (state, value) {
    state.total_points = value
  }
}