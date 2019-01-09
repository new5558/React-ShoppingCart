import React from 'react';

export default function({onTypeBoxPress, textField}) {
    return(
        <div>
            <input value={textField} type="text" onKeyPress={onTypeBoxPress}/>
        </div>
    );

}