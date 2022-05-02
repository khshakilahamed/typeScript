import React, { useEffect, useState } from 'react';
import PracticeList from './PracticeList';

const PracticeLists = () => {
    const [photos, setPhotos] = useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/photos")
        .then(res => res.json())
        .then(data => setPhotos(data))
    }, []);
    
    return (
        <div>
            {
                photos.map(photo => <PracticeList photo={photo}></PracticeList>)
            }
        </div>
    );
};

export default PracticeLists;