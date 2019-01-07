import React from 'react';

export default function({onPress, textField, onChange}) {
    return(
        <div>
            <input value={textField} type="text" onKeyPress={onPress} onChange={onChange}/>
        </div>
    );

}