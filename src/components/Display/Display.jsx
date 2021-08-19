import { useSelector } from 'react-redux';
import Joke from '../Joke/Joke';
import IconLike from '../IconLike/IconLike'

const Display = () =>{
    const joke = useSelector(state=>state.joke)

    return(
        <div className="box">
            <IconLike />
            <p>
                {
                joke.length === 0 ? 'nothing' : <Joke />
                }
            </p>
        </div>
    )
}

export default Display