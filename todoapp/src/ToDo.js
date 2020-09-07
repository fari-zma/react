import React from 'react'
import './index'

const ToDo = (props) => {
    return (
        <div className='todo'>
            <li> 
                {props.text} 
                <button className="del-btn" onClick={() => { props.onSelect(props.id) }}>x</button>
            </li>
        </div>
    )
}

export default ToDo;