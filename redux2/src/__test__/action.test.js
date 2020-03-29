import reducer from '../reducers';

describe('Action testing' ,( ) => {
    it('Testing Action',() =>{
        let state={
            articles:[],
            gallery:[]
        }

        state = reducer(state,{action:'GET_ARTICLES'})

        expect(state).toEqual({
            articles:[],
            gallery:[]
        })

    })
})