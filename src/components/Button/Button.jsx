import { useDispatch } from 'react-redux';
import { fetchData } from '../../redux/action'

const Button = () =>{
    const dispatch = useDispatch()
    const onClick = () =>{
        dispatch(fetchData())
      }
    return(
        <button onClick={onClick}>
            More
        </button>
    )
}

export default Button