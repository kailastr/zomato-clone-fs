import React from 'react';

const PhotoCollection = (props) => {

    const openImage = () => {
        props.setCurrentImage(props.index);
        props.openViewer();
    }

    return (
        <>
            <div className='flex flex-col h-56' onClick={openImage}>
                <div className='w-full h-full overflow-hidden rounded-lg'>
                    <img src={props.image} alt="Menu" className='w-full h-full transform transition duration-500 rounded-lg hover:scale-110 object-cover object-center cursor-pointer' />
                </div>
            </div>
        </>
    )
}

export default PhotoCollection