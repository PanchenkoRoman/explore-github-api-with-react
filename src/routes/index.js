import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Test from '../components/test'

export default () =>(
    <BrowserRouter>
        <Route path='/' component={Test} />
    </BrowserRouter>
)

