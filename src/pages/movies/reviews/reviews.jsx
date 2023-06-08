import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from '../../../apiMovie/ApiMovie';
import { ReviewsList } from '../moviesDetails.styled';
const Reviews = () => {
  const [reviews, setReviews] = useState({});

  const { id } = useParams();

  useEffect(() => {
    try {
      fetchReviews(id).then(data => {
        setReviews(data.results);
      });
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  if (Object.keys(reviews).length === 0) {
    return <p>No reviews!</p>;
  }

  return (
    <ReviewsList style={{ display: 'flex' }}>
      <ul>
        {reviews.length > 0
          ? reviews.map(comment => (
              <li key={comment.id}>
                <div>
                  <p>{comment.author}</p>

                  <p>
                    {new Date(comment.updated_at).toLocaleDateString()}
                  </p>
                </div>

                <div>{comment.content}</div>
              </li>
            ))
          : "No reviews yet!"}
      </ul>
    </ReviewsList>
  );
};

export default Reviews;
