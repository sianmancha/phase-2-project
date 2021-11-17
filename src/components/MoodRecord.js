import React from 'react';

function MoodRecord({mood: {name, icon}}) {
    return(
        <div>
            {name}
            {icon}
            {/* figure out Date.now() */}
        </div>
    )
}

export default MoodRecord;