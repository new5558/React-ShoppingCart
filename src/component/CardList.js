import React from 'react';
import Card from './Card';

export default function({arrayOfNamesObj = [], onDeleteItem}) {
    const arayOfCards = arrayOfNamesObj.map(({name, id}) => {
        return (<Card onDeleteItem={onDeleteItem} name = {name} key={id} id={id}/>)
    })
    return(
        <div>
            {arayOfCards}
        </div>
    );
}