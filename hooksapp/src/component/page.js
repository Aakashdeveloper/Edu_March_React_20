import React, {useState, useEffect} from 'react';
import useTitle from './customeHooks';

function page1(){

    const [record, setRecord] = useState(0);

   /* useEffect(() => {
        document.title = `Record ${record}`
    },[record])*/

    useTitle(record)

    return(
        <div>
            <button onClick={() => setRecord(record+1)}>Record: {record}</button>
        </div>
    )
   
}

export default page1;