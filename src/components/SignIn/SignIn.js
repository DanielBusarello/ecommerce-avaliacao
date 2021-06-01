import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signin } from '../../../actions/userActions';

import './SignIn.scss';

export default function SignIn(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const userSignin = useSelector(state => state.userSignin);
    const { loading, userInfo, error } = userSignin;
    
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(signin(email, password));
    }

    useEffect(() => {
        if(userInfo) {
            props.history.push("/")
        }
        return () => {
            
        }
    }, [userInfo, props.history])
    
    return (
        <div className="signIn-container">
            <form onSubmit={submitHandler}>
                <ul className="signIn-form">
                    <li>
                        <h2>Login</h2>
                    </li>
                    <li>
                        {loading && <div>Carregando...</div>}
                        {error && <div>{error}</div>}
                    </li>
                    <li>
                        <label htmlFor="email">
                            Email
                        </label>
                        <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}></input>
                    </li>
                    <li>
                        <label htmlFor="password">
                            Senha
                        </label>
                        <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)}></input>
                    </li>
                    <li>
                        <button type="submit">Login</button>
                    </li>
                    <li>
                        <Link to="/signup">Criar sua conta</Link>
                    </li>
                </ul>
            </form>
        </div>
    );
}
