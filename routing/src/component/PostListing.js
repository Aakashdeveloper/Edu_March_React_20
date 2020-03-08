import React from 'react';
import {Link} from 'react-router-dom';
import './postlisting.css';

const Postlisting = (props) => {

    const renderList = ({datalist}) => {
        if(datalist){
            return datalist.map((item) => {
                return(
                    <Link to={`/post/${item.id}`} key={item.id}>
                        <div className="card col-md-2">
                        <div className="row">
                            <img src={item.img} className="card-img-top"/>
                            <span className="topTemp">{item.name}</span>
                        </div>
                        </div>
                    </Link>
                )
            })
        }
    }

    return(
        <div>
            {renderList(props)}
        </div>
    )
}


export default Postlisting;