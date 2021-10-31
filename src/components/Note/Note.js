import React from 'react'

import {MdDeleteForever} from "react-icons/md"

function Note() {
    return (
        <div className= 'note'>
            <span>Hello this is our first note with react app</span>
            <div className='note-footer' >
                <small>13/04/2021</small>
                <MdDeleteForever className='delete-icon' size='2rem'></MdDeleteForever>
            </div>
            
        </div>
    )
}

export default Note
