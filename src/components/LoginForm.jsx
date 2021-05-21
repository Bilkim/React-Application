import { useState } from "react";
import axios from 'axios';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');


    const handleSubmit= async(e) => {
        e.preventDefault();

        const authObject = {'Project-ID': "6cf9dc20-639b-4cde-8966-f68190ecbccc" , 'User-Name': username , 'User-Secret': password};

        try {
            await axios.get('https://api.chatengine.io/chats', {headers: authObject});

            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload();
            

        } catch (err){
            setError('Oops, incorrect credentials, Try Again.');

        }
    };

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat AppLication</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required/>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required/>
                    <div align="center">
                        <button type="submit" classname="button">
                            <span>Login to Chat</span>
                        </button>
                    </div>

                    
                </form>
                <h1>{error}</h1>
            </div>
        </div>
    );

};

export default LoginForm;