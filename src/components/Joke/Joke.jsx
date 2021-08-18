import { useSelector } from 'react-redux';

const Joke = () =>{
    const joke = useSelector(state=>state.joke)
    return(
        <div className="joke">
            <img src={joke.state.icon_url} alt="Chuck" />
            <p>
                {joke.state.value}
            </p>
        </div>
    )
}

export default Joke