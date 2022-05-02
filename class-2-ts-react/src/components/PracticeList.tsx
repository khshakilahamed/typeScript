import React from 'react';


interface objectArray{
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string,
}

const PracticeList = ({photo}:{photo:objectArray}) => {
        return (
            <div>
                <img src={photo.url} alt="" />      
            </div>
        );
};

export default PracticeList;