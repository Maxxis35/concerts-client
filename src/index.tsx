import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UsersStore from "./store/usersStore";

interface UsersState {
    usersStore: UsersStore;
}

const usersStore = new UsersStore();
export const Context = createContext<UsersState>({
    usersStore,
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Context.Provider value={{
        usersStore,
    }}>
        <App />
    </Context.Provider>

);

