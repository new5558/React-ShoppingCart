import React from 'react';

export default function({onTypeBoxPress, textField, onTypeBoxChange}) {
    return(
        <div>
            <input value={textField} type="text" onKeyPress={onTypeBoxPress} onChange={onTypeBoxChange}/>
        </div>
    );

}