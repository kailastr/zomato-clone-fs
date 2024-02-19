import React, { useState } from "react";
import ImageViewer from 'react-simple-image-viewer';

import PhotoCollection from "./PhotoCollection";

const Photos = () => {

    const [photos, setPhotos] = useState([
        "https://b.zmtcdn.com/data/pictures/8/95418/c2f8be3d9f555c1c0eae3a7de354f224.jpg",
        "https://b.zmtcdn.com/data/pictures/8/95418/3a05812d7a96f42551ba632922ef48ff.jpg",
        "https://b.zmtcdn.com/data/pictures/8/95418/c7f0c3ed18dc20ead39d9bff3cc610ad.jpg",
        "https://b.zmtcdn.com/data/reviews_photos/290/8ae3e8f4be53cd90291147869e181290_1507017170.jpg",
        "https://b.zmtcdn.com/data/reviews_photos/b17/6e6a83427c502119e67c8b27dd27db17_1537505498.jpg",
        "https://b.zmtcdn.com/data/reviews_photos/5ab/e52c4a631e5e61d567dee8e7fa1005ab_1491241592.jpg",
        "https://b.zmtcdn.com/data/reviews_photos/d30/8e22457fe20aee7cbcf7c42a0dca5d30_1501177814.jpg"
    ]);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [currentImage, setCurrentImage] = useState(0);

    const closeViewer = () => setIsMenuOpen(false);
    const openViewer = () => setIsMenuOpen(true);

    return (
        <>
            {isMenuOpen && (
                <ImageViewer src={photos} currentIndex={currentImage} disableScroll={false} onClose={closeViewer} />
            )}

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                {photos.map((photo, index) => (
                    <PhotoCollection key={index} openViewer={openViewer} index={index} image={photo} setCurrentImage={setCurrentImage} />
                ))}
            </div>
        </>
    )
}

export default Photos