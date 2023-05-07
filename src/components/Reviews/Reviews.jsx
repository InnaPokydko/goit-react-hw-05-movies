import PropTypes from 'prop-types';
import { Link, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { ReviewsBox } from './Reviews.styled';

const Reviews = ({ reviews, movieId }) => {
  return (
    <ReviewsBox>
      {reviews && 
        reviews.map(({ id, author, content, updated_at }) => (
          <div key={id}>
            <Link to={`/movies/${movieId}/reviews`}>
            <h3>Author: {author}</h3>
              <p>{updated_at}</p>
              <p>{content}</p>
            </Link>
            <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
        </Suspense>
          </div>
        ))}
    </ReviewsBox>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      updated_at: PropTypes.string.isRequired,
    })
  )
};

export default Reviews;

// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// const Reviews = ({ movieId }) => {
//   const [reviews, setReviews] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(false);

//   useEffect(() => {
//     const fetchReviews = async () => {
//       try {
//         setIsLoading(true);
//         const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=7c36d10ef8eae7f493da1fadc9c612a4&language=en-US&page=1`);
//         setReviews(response.data.results);
//         setIsLoading(false);
//       } catch (error) {
//         setError(true);
//         setIsLoading(false);
//         console.log(error);
//       }
//     };

//     fetchReviews();
//   }, [movieId]);

//   return (
//     <div>
//       {isLoading && <p>Loading...</p>}
//       {error && <p>Something went wrong.</p>}
//       {reviews && reviews.length > 0 ? (
//         reviews.map(({ id, content, updated_at }) => (
//           <div key={id}>
//             <Link to={`/movies/${movieId}/reviews/${id}`}>
//               <p>{updated_at}</p>
//               <p>{content}</p>
//             </Link>
//           </div>
//         ))
//       ) : (
//         <p>No reviews available.</p>
//         )}
//     </div>
//   );
// };

// export default Reviews;

// import { Link } from 'react-router-dom';

// const Reviews = () => {
//   const [reviews, setReviews] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(false);

//   const { movieId } = useParams();

//   useEffect(() => {
//     const fetchReviews = async () => {
//       try {
//         setIsLoading(true);
//         const response = await axios.get(
//           `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
//         );
//         setReviews(response.data.results);
//         setIsLoading(false);
//       } catch (error) {
//         setError(true);
//         setIsLoading(false);
//         console.log(error);
//       }
//     };
//     fetchReviews();
//   }, [movieId]);

//   return (
//     <div>
//       <h2>Reviews:</h2>
//       {isLoading && <p>Loading...</p>}
//       {error && <p>Something went wrong.</p>}
//       {reviews && reviews.length > 0 ? (
//         reviews.map(({ id, content, updated_at }) => (
//           <div key={id}>
//             <p>{updated_at}</p>
//             <p>{content}</p>
//           </div>
//         ))
//       ) : (
//         <p>No reviews available.</p>
//       )}
//     </div>
//   );
// };

// export default Reviews;
