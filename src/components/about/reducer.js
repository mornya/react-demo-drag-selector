import produce from 'immer'
import types from './action'

const initialState = () => ({
  pageView: 0,
})

export default produce((draft, { type, payload }) => {
  switch (type) {
    case types.ADD_ABOUT_PAGEVIEW:
      draft.pageView = payload
      break
    default:
      break
  }
}, initialState())
