import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

import './App.css';


const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm/>


    return (
        <ChatEngine
            height="100vh"
            projectID="6cf9dc20-639b-4cde-8966-f68190ecbccc"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')} 
            renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        
        />
    );
};

export default App;