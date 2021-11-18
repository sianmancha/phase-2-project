import React from 'react';

function MoodRecord({mood: {name, icon} }) {

    return(
        <div>
           <a title={name} >{icon}</a>
            {/* figure out Date.now() */}
        </div>
    )
}

export default MoodRecord;