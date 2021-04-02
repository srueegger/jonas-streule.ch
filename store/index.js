export const state = () => ({
  player_name: '',
  total_points: 0,
  total_played_cards: 0
})

export const mutations = {
  SET_PLAYER_NAME (state, value) {
    state.player_name = value
  },
  SET_TOTAL_POINTS (state, value) {
    state.total_points = value
  },
  SET_PLAYED_CARD (state, value) {
    state.total_played_cards = value
  }
}