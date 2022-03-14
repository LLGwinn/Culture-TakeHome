import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';

/** User can choose to view Foaming, Not Foaming, or all reactors.
 *  User is redirected to /images, where server renders results based on that choice.
 */

function UserInputForm( {setStatus} ) {
    const [reactorChoice, setReactorChoice] = useState('');
    const history = useHistory();

    function handleChange(evt) {
        setReactorChoice(evt.target.value);
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        setStatus(reactorChoice);
        history.push('/images');
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor='reactor-status'>Which images would you like to view?</label>
            <select name='reactor-status' 
                    value={reactorChoice}
                    onChange={handleChange}>
                <option disabled default value="">Choose status...</option>
                <option value="all">All Reactors</option>
                <option value="foaming">Only Foaming Reactors</option>
                <option value="nonfoaming">Only Non-Foaming Reactors</option>
            </select>
            <button>Show Images</button>
        </form>

    )
}

export default UserInputForm;