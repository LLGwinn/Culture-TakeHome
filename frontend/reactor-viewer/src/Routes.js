import React, {useState} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import ImageList from './ImageList';
import Home from './Home';
import NotFound from './NotFound';

function Routes() {
    const [reactorStatus, setReactorStatus] = useState('all');
  
    function changeReactorStatus(status) {
        setReactorStatus(status);
    }

    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/images'>
                    <ImageList status={reactorStatus} />
                </Route>
                <Route exact path='/'>
                    <Home changeStatus={changeReactorStatus} />
                </Route>
                <Route>
                    <NotFound />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;