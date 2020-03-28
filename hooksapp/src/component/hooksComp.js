import React,{useState,useEffect} from 'react';

const url = ""
function HookComponent(){
    const [title] =  useState('Developer Funnel');
    const [details] =  useState('lorem ipsum is simply dummy text of the printing and typesetting industry. lorem ipsum has been the industrys standard dummy text ever ');
    const [count,setCount] = useState(0);
    const [movies,SetMovies] = useState('')

    useEffect(() => {
        /*fetch(url)
        .then(res => res.json())
        .then((data) => {
            SetMovies(data)
        }) */

        async function fetchMovies(){
            const res = await fetch(url);
            res.json()
            .then((data) =>  SetMovies(data))
        }

        fetchMovies()

    })

    return(
        <div className="jumbotron">
            <h1>{title}</h1>
            <p>{details}</p>
            <p>{count}</p>
            <div className="btn btn-primary"
            onClick={() => { setCount(count+1)}}>
                Counter
            </div>    
        </div>
        
    )
}

export default HookComponent;