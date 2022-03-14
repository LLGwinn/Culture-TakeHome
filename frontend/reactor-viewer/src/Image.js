import axios from 'axios';
import React from 'react';
import './Image.css';

/** Individual image with checkbox to indicate foaming status. */

function Image({image}) {
    // Backend call to update foaming status when checkbox is clicked.
    async function updateImage(checkboxStatus) {
        const result = await axios.put(
            `http://localhost:3000/images/update?url=${image.pic_url}`, {isFoaming:checkboxStatus})
        return result;
    }

    // Gets checkbox value and sends it to update function
    async function handleChange(evt) {
        const {value} = evt.target;
        await updateImage(value);
    }

    return(
        <div className='Image'>
            <img src={image.pic_url} alt='' width='200px' />
            <form>
                <input type="radio" 
                       name="foaming"
                       value='true' 
                       onChange={handleChange}/>
                <label htmlFor="foaming">Foaming</label>
                <input type="radio" 
                       name="not-foaming" 
                       value='false'
                       onChange={handleChange} />
                <label htmlFor="not-foaming">Not Foaming</label>
            </form>
        </div>
    )
}

export default Image;