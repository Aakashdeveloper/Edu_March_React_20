import React, {useEffect} from 'react';

function useTitle(){

    useEffect(() => {
        document.title = `Record ${record}`
    },[record])

    
}

export default useTitle;