export function movieList(){
    return{
        type:'MOVIE_LIST',
        payload:[
            {id:1, name:'Avengers'},
            {id:2, name:'DeathRace'},
            {id:3, name:'Madmax'},
        ]
    }
}