import React, {useState} from 'react'
import Users from './Users';
import ChatInput from './ChatInput';
import ChatDisplay from './ChatDisplay';


const Main = props => {

    const [input, setInput] = useState('');
    const [inputList, setInputList] = useState([]);


    const inputChatHandler = event => {
        setInput(event.currentTarget.value)
    }

    const addChatHandler = event => {
        setInputList(inputList.concat(input))
        setInput('')
    }

    const onEnter = event => {
        if(event.keyCode === 13){
            addChatHandler()
        }
    }


    return(
        <div className="chat">
            <ChatDisplay
                inputList={inputList}/>
            <Users/>
            <ChatInput
                input={input}
                inputChatHandler={inputChatHandler}
                addChatHandler={addChatHandler}
                onEnter={onEnter}
            />
        </div>

    )
}

export default Main;