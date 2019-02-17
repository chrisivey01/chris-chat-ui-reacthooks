import React from 'react'

const ChatDisplay = props => {
    return(
        <div className="display">
            <ul>
            {props.inputList.map(item => {
                return <li key={item} style={{listStyle:"none"}}>{item}</li>
            })}
            </ul>
        </div>
    )
}

export default ChatDisplay;