import {addArticle} from './index_action';
import {createStore} from 'redux';

const initialState = {
    articles : ["this is for concept proving"],
};

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case "ADD_ARTICLE":
            let result = Object.assign({}, state, {articles: state.articles.concat(action.article)});
            return result;
        default:
            return state;    
    }
}

const store = createStore(rootReducer);
window.store = store;
window.addArticle = addArticle;