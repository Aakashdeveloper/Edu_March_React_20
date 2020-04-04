import React from 'react';
import {Link} from 'react-router-dom';

const UserDisplay = (props) => {

    const RenderList = ({userData}) => {
        if(userData){
            return userData.map((item) =>{
                return(
                    <div>
                        <div>{item.name}</div>
                        <div>{item.email}</div>
                        <hr/>
                    </div>
                )
            })
        }
    }

    return(
        <div className>
            <h4>List of users</h4>
            {RenderList(props)}
        </div>
    )
}
export default UserDisplay;