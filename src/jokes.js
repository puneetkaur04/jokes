import React, {useState, useEffect} from 'react';
import './App.css'
const Jokes = () => {
    const [joke, setJokes] = useState('');

    useEffect(() => {
        getJokes()
    }, []);

    const getJokes = () => {
        let url = 'https://api.chucknorris.io/jokes/random'
        fetch(url)
        .then(resp => resp.json())
        .then(data => {

            setJokes(data);
        })
    }

    const handleClick = () => {
        getJokes();
    }

    return (
        <div id="joke-box">
            <div id="text"> <p>{joke.value}</p> </div>
            {
                <button onClick = {handleClick} id="new-joke"> New Joke </button>
            }
        </div>
    )
}

export default Jokes;