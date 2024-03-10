import React, { useState } from 'react';

import ReviewModal from '../Reviews/ReviewModal';

const AddReviewCard = () => {

    const [isOpen, setIsOpen] = useState(false);

    const [type, setType] = useState("");

    const OpenModal = () => {
        if (!localStorage.zomatoUser) {
            return alert("Please sign In to post a review");
        }

        setIsOpen(true);
    };

    const getReviewType = (reviewType) => {
        setType(reviewType);
    }

    return (
        <>
            <ReviewModal isOpen={isOpen} setIsOpen={setIsOpen} type={type} />
            <h3 className='text-xl font-medium'>Rate your experience for</h3>
            <div className='flex items-center gap-3'>
                <div className='flex items-center gap-2'>
                    <input type="radio" name="review" id="dining" onChange={(event) => getReviewType(event.target.id)} />
                    <label htmlFor="dining">Dining</label>
                </div>
                <div className='flex items-center gap-2'>
                    <input type="radio" name="review" id="delivery" onChange={(event) => getReviewType(event.target.id)} />
                    <label htmlFor="delivery">Delivery</label>
                </div>
            </div>
            <button className='text-zomato-400 text-left' onClick={OpenModal}>Write a review</button>
        </>
    )
}

export default AddReviewCard