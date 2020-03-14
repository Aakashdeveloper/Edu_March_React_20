export default function(state=null, action){
    switch(action.type){
        case 'MOVIE_LIST':
            return action.payload
        default:
            return state
    }
}