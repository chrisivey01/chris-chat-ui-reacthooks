import React, {useState} from 'react'
import Users from './Users';
import ChatInput from './ChatInput';
import ChatDisplay from './ChatDisplay';
import io from "socket.io-client";


const Main = props => {

    const [input, setInput] = useState('');
    const [inputList, setInputList] = useState([]);
    const [socket] = useState(io('localhost:8000'))
    // const [endpoint, setEndpoint] = useState(io('http://localhost:8000/'))


    // this.socket = io('localhost:8000')
    socket.on('RECEIVE_MESSAGE', (data) => {
        addChatHandler(data)
    })


    const inputChatHandler = event => {
        setInput(event.currentTarget.value)
    }

    const addChatHandler = (data)=> {
        setInputList(inputList.concat(data))
    }

    const sendChatHandler = (event,data) => {

        socket.emit('SEND_MESSAGE',{
            input:input
        })
        setInput('')
    }

    const onEnter = event => {
        if(event.keyCode === 13){
            sendChatHandler()
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
                addChatHandler={sendChatHandler}
                onEnter={onEnter}
            />
        </div>

    )
}

export default Main;