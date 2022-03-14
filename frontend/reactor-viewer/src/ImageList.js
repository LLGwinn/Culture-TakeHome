import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Image from './Image';
import './ImageList.css';

/** The meaty component!
 *  Gets foaming status from UserInputForm and makes backend call based on that status.
 *  Keeps track of the last URL returned, for pagination purposes.
 * 
 *  Returns an array of images that match foaming status.
 *  
 */

function ImageList( {status} ) {
    const [images, setImages] = useState(null);
    const [lastUrl, setLastUrl] = useState('a');
    const [foamingStatus, setFoamingStatus] = useState(null);

    const endpoint = `http://localhost:3000/images/${status}?lastValue=${lastUrl}`;

    // Calls next set of images when lastUrl is updated (Next Page button click)
    useEffect(function getNextImages() {
        async function getImages() {
            const result = await axios.get(endpoint);
                setImages(result.data);
            }
        getImages();
    }, [lastUrl])

    // Resets the last URL when there is a change in foaming status, so new set of images renders.
    useEffect(function resetLastUrl() {
        setLastUrl('a');
    }, [foamingStatus])


    function handleClick(evt) {
        evt.preventDefault();
        setLastUrl(images[images.length-1].pic_url);
    }

    if (!images) return ('LOADING...');

    return(
        <div className='ImageList'>
            <h3>Images for {status} Reactors</h3>
            {images.length > 0 ?
            images.map(image => <Image image={image} key={image.pic_url}/>)
            :
            <p>NO IMAGES TO DISPLAY</p>}
            <button onClick={handleClick}>Next Page</button>
            <Link to='/'><button>Home</button></Link>
        </div>
    )
}

export default ImageList;