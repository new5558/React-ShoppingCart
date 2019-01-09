import React from 'react';

export default function({name, id, onDeleteItem}) {
    return(
        <div className="flex items-center">
            <h2>{name}</h2>
            <button className="ml3" onClick={onDeleteItem(id)}>delete</button>
        </div>
    );
}