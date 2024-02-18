import React, { useState } from "react";

import ReviewCard from '../Reviews/ReviewCard';
import AddReviewCard from '../Reviews/AddReviewCard';

const Reviews = () => {

    const [reviews, setReviews] = useState([
        {
            rating: 3.9,
            isRestaurantReview: true,
            createdAt: "Sat Feb 17 2024 17:00:55 GMT+0530 (India Standard Time)",
            reviewText: "Worth for money and great service"
        },
        {
            rating: 4,
            isRestaurantReview: false,
            createdAt: "Sat Feb 15 2024 17:00:55 GMT+0530 (India Standard Time)",
            reviewText: "Tasty food and friendly service"
        }
    ]);

    return (
        <div className="w-full h-full flex-col md:flex md:flex-row relative gap-5">
            <div className="w-full md:w-8/12 flex flex-col gap-3">
                <div className="md:hidden mb-4 flex flex-col gap-2">
                    <AddReviewCard />
                </div>
                {reviews.map((review, index) => (
                    <ReviewCard {...review} key={index} />
                ))}
            </div>
            <aside
                style={{ height: "fit-content" }}
                className='hidden md:flex md:w-4/12 sticky rounded-xl top-20 bg-white p-4 shadow-md flex-col gap-4'
            >
                <AddReviewCard />
            </aside>
        </div>
    )
}

export default Reviews