import React from 'react';
import { Link } from 'react-router-dom';

const ArticleNews = (props) => {

    const renderArticle = ({articleArray}) => {
        if(articleArray){
            return articleArray.map((item) => {
                return(
                    <Link to={`/details/${item.id}`} className="item">
                        <div className="left"
                        style={{background:`url(/images/articles/${item.img})`}}>
                        </div>
                        <div className="right">
                            <h3>{item.title}</h3>
                            <div className="category-tag">
                                {item.category}
                            </div>
                            <div className="tags">
                                <span>
                                    <i className="fa fa-eye">
                                        {item.views}
                                    </i>
                                </span>
                                <span>
                                    <i className="fa fa-thumbs-up">
                                         {item.likes[0]}
                                    </i>
                                </span>
                                <span>
                                    <i className="fa fa-thumbs-down">
                                        {item.likes[1]}
                                    </i>
                                </span>
                            </div>
                        </div>
                    </Link>
                )
            })
        }
    }

    return(
        <div className="other-news">
            <h1>ArticleNews</h1>
            <div className="other-news-items">
                {renderArticle(props)}
            </div>

        </div>
    )
}

export default ArticleNews