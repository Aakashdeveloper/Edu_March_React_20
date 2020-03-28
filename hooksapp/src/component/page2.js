import React, {useState, useEffect} from 'react';

function page2(){

    const [record, setRecord] = useState(0);

    useEffect(() => {
        document.title = `Record ${record}`
    },[record])

    return(
        <div>
            <button onClick={() => setRecord(record+1)}>Record: {record}</button>
        </div>
    )
   
}

export default page2;