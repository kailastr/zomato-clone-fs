import React, { useState } from 'react';
import ImageViewer from 'react-simple-image-viewer';

const MenuCollection = (props) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);
    const closeViewer = () => setIsMenuOpen(false);
    const openViewer = () => setIsMenuOpen(true);

    return (
        <>
            {isMenuOpen && (
                <ImageViewer
                    src={props.images}
                    currentIndex={currentImage}
                    disableScroll={false}
                    onClose={closeViewer}
                />
            )}
            <div className='w-32 h-32 md:w-48 flex flex-col md:h-48' onClick={openViewer}>
                <div className='w-full h-full overflow-hidden rounded-lg object-cover'>
                    <img src={props.images[0]} alt="menu" className='w-full h-full transform transition duration-500 rounded-lg hover:scale-110' />
                </div>
                <strong>{props.pages} Menu </strong>
            </div>
        </>
    )
}

export default MenuCollection