import React, { Component, useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import api from '../../api';
import { setCookie } from '../../utils/cookie';

export default function Movies(props) {

    const login = async (e) => {
        e.preventDefault();
        console.log(" login btn ", email, password)
        const payload = { email, password }
        const apiResponse = await api.login(payload)
        console.log(" api Response ", apiResponse)
        setCookie('_token', apiResponse.data.token)
        props.history.push('/admin')
    }

    return (
        <div>
            <div className="login-container">
                <form onSubmit={login}>
                    <div className="form-wrap">
                        <TextField
                            label="Email"
                            name="email"
                            variant="outlined"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                        <br/>
                        <TextField
                            label="Password"
                            name="password"
                            variant="outlined"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            type="password"
                        />
                        <br/>
                        <Button variant="contained" color="primary" type="submit">Login</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}