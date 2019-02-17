import React, {useState} from 'react'

const ChatInput = props => {

    return(
        <div>
            <input
                onChange={props.inputChatHandler}
                value={props.input}
                onKeyDown={props.onEnter}
            />
            <button onClick={props.addChatHandler}>Submit</button>

        </div>
    )
}

export default ChatInput;