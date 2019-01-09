import {
    // ADD_ARTICLE,
    DELETE_ITEM,
    ADD_ITEM,
    ENTER_TYPEBOX,
    } from './constant';

// export const addArticle = () => ({type: ADD_ARTICLE, article: "test"});
export const onDeleteItem = (key) => () => ({type: DELETE_ITEM, id: key});
export const onAddItem = (event) => ({type: ADD_ITEM, item: event.target.value}); 
export const onTypeBoxPress = (event) => ({type:ENTER_TYPEBOX, eventKey: event.key});