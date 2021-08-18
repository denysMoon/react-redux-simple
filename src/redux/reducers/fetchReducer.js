import FETCH from '../types'

const initialState = []

export const fetchReducer = (state = initialState, action) => {
    switch(action.type) {
      case FETCH:
        return { state: action.payload };
        default: return state
    }
  }