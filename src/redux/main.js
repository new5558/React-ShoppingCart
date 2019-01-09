// import {onDeleteItemAction, onAddItemAction} from './index_action';
import {createStore, combineReducers} from 'redux';
import {
    // ADD_ARTICLE, 
    ADD_ITEM,  
    DELETE_ITEM, 
    ENTER_TYPEBOX,
} from './constant';

const initialState = {
    // articles : ["this is for concept proving"],
    list: [],
    textField: "",
    count: 0,
};

// const addArticle = (state = initialState, action) => {
//     switch(action.type) {
//         case "ADD_ARTICLE":
//             let result = Object.assign({}, state, {articles: state.articles.concat(action.article)});
//             return result;
//         default:
//             return state;
//     }
// }

const onDeleteItem = (state = initialState, action) => {
    switch(action.type){
        case DELETE_ITEM:
            console.log('onDeleteItem');
            return Object.assign({}, state, {list: state.list.filter((item) => {
                return item.id === action.id;
            })});
        default:
            return state;
    }
}

const onAddIten = (state = initialState, action) => {
    switch(action.type) {
        case ADD_ITEM:
            console.log("onAddIten")
            let newCount = state.count + 1;
            const obj = Object.assign({}, state, {list: state.list.concat({item: action.item, id: newCount})});
            return obj;
        default:
            return state;
    }
}

const onTypeBoxPress = (state = initialState, action) => {
    switch(action.type) {
        case ENTER_TYPEBOX:
            // onAddIten(state, action);
            console.log('onTypeBoxPress')
            return Object.assign({}, state, {textField: ""}, );
        default:
            return state;
    }
}

//     if(event.key === 'Enter') {
//       this.onAddItem(event);
//       this.setState({
//         textField: '',
//       })
//     }
//   }

// in case needed this method

// const onTypeBoxChange = (state = initialState, action) => {
//     switch(action.type) {}
// }

// onTypeBoxChange = (event) => {
//   this.setState({
//     textField: event.target.value,
//   });
// }


const rootReducer = combineReducers(onDeleteItem, onAddIten, onTypeBoxPress);

export default createStore(rootReducer);