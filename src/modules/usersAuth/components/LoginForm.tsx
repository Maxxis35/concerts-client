import React, {FC, useContext, useState} from 'react';
import {Box, Button, TextField} from "@mui/material";
import {Context} from "../../../index";

const LoginForm: FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {usersStore} = useContext(Context)

    return (
        <div>
            <Box component="form">
                <TextField label="Login" variant="outlined"
                    onChange={e=> setEmail(e.target.value)}
                    value={email}/>
                <TextField label="Password" type="password" variant="outlined"
                    onChange={e=> setPassword(e.target.value)}
                    value={password}/>
                <Button onClick={()=> usersStore.login(email, password)}>LogIn</Button>
            </Box>
            
        </div>
    );
};

export default LoginForm;