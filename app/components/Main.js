import React from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Students from './Students';

export default function Main () {
    return (
        <div>
            <div className='row'>
                <Navbar />
            </div>
            <div className='row'>
                <main>
                    <Switch>
                        <Route path='/home' component={Home}/>
                        <Route path='/students' component={Students}/>
                        <Redirect to='/home' />
                    </Switch>
                </main>
            </div>
        </div>
    )
}
