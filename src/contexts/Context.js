import React, {createContext, Component} from 'react';

export const Context = createContext()

export default class ContextProvider extends Component {
    state = { 
        user: "user",
        password: "",
        logged: false
     }

     setUser = (user) => {
         this.setState({user: user})
     }
     
     setPassword = (password) => {
         this.setState({password: password})
     }

     setLogged = (logged) => {
         this.setState({logged: logged})
     }


    render() { 
        return (  
            <Context.Provider value={{...this.state, setUser: this.setUser, setLogged: this.setLogged, setPassword: this.setPassword}}>
                {this.props.children}
            </Context.Provider>
        );
    }
}
 
