import { useSelector } from 'react-redux';
import Joke from '../Joke/Joke';

const Display = () =>{
    const joke = useSelector(state=>state.joke)

    return(
        <div className="box">
            <p>
                {
                joke.length === 0 ? 'nothing' : <Joke />
                }
            </p>
        </div>
    )
}

export default Display