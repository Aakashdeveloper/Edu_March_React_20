import reducer from '../reducers';

describe('Reducer testing' ,( ) => {
    it('Should return inital state',() =>{
        expect(JSON.stringify(reducer(undefined,{}))).toEqual(JSON.stringify({
            articles:{},
            gallery:{}
        }))
    })
})