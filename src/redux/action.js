import axios from 'axios'
import FETCH from './types'

export const fetchData = () => {
    return async(dispatch, getStore)=>{
      const result = await axios.get('https://api.chucknorris.io/jokes/random')

      dispatch({
        type: FETCH,
        payload: result.data
      })
    }
  }