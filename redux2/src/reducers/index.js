import {combineReducers } from 'redux';
import articles from './article_reducer';
import gallery from './galleryReducer';

const rootReducer = combineReducers({
    articles,
    gallery
})

export default rootReducer;

