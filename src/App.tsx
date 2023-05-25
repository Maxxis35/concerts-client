import React, {useContext} from 'react';
import './App.css';
import LoginForm from "./modules/usersAuth/components/LoginForm";
import {Context} from "./index";
import {observer} from "mobx-react-lite";

function App() {
     const {usersStore} = useContext(Context);

  return (
    <div className="App">
      <h1>Work</h1>
        <h1>{usersStore.isAuth ? `User is authorized ` : 'SingIn' }</h1>
        <LoginForm/>

    </div>
  );
}

export default observer(App);
