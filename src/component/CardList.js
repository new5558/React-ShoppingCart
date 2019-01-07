import React from 'react';
import Card from './Card';

export default function({arrayOfNamesObj = [], onDelete}) {
    // console.log(arrayOfNamesObj, 'ok');
    const arayOfCards = arrayOfNamesObj.map(({name, id}) => {
        return (<Card onDelete={onDelete} name = {name} key={id} id={id}/>)
    })
    return(
        <div>
            {arayOfCards}
        </div>
    );
}