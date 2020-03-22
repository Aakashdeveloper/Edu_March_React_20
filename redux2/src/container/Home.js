import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import { latestNews,articleNews,galleryNews } from '../action';
import { bindActionCreators} from 'redux';

import LatestDisplay from '../component/Home/latestDisplay';
import ArticleDisplay from '../component/Home/ArticleDisplay';
import GalleryDisplay from '../component/Home/GalleryDisplay';

class Home extends Component{
    componentDidMount(){
        if(Object.entries(this.props.myarticle).length===0){
            this.props.latestNews();
            this.props.articleNews();
            this.props.galleryNews();
        }
       
    }

    render(){
        return(
            <Fragment>

                <LatestDisplay ldata={this.props.myarticle.latestdata}/>
                <ArticleDisplay articleArray={this.props.myarticle.articledata}/>
                <GalleryDisplay galleryArray={this.props.mygallery.gallerydata}/>
            </Fragment>
        )
    }
}

//this will recive state
function mapStateToProps(state){
    console.log(state)
    return{
        myarticle:state.articles,
        mygallery:state.gallery
    }
}

//this will dispatch action
function mapDispatchToProps(dispatch){
    return bindActionCreators({latestNews,articleNews,galleryNews},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);