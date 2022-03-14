import React from 'react';
import UserInputForm from './UserInputForm';
import './Home.css';

/** Renders the welcome message and form to choose reactor status to view. */

function Home( {changeStatus} ) {
    return(
        <div className='Home'>
            <h2>Welcome to your Reactor Viewer</h2>
            <UserInputForm setStatus={changeStatus} />
        </div>
    )
}

export default Home;