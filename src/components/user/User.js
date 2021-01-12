import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import './User.css'
import "reactjs-popup/dist/index.css";
import { Context } from '../../contexts/Context';
import { useHistory } from 'react-router-dom'



function User() {

    const { user, setUser, setPassword, setLogged } = useContext(Context)
    const history = useHistory()

    const logout =  () => {
        setUser("")
        setPassword("")
        setLogged(false)
        history.push("/login");
    }
    
    return (
        <div className="useroptions">
            <h1>Opcje użytkownika {user}</h1>
            <br />
            <Button onClick={logout} variant="primary">
                Wyloguj
            </Button>
        </div>
    )
}

export default User
