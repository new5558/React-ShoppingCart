import React from 'react';

export default function({name, id, onDelete}) {
    return(
        <div className="flex items-center">
            <h2>{name}</h2>
            <button className="ml3" onClick={() => onDelete(id)}>delete</button>
        </div>
    );
}